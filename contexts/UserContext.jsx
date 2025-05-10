import { createContext, useContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";
import { toast } from "../lib/toast";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 初始化状态

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const currentUser = await account.get();
      setUser(currentUser);
      toast('Welcome back. You are logged in');
      return true;
    } catch (err) {
      console.error("Login error:", err);
      toast(err?.message || 'Login failed');
      return false;
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
      toast('Logged out');
    } catch (err) {
      console.error("Logout error:", err);
      toast(err?.message || 'Logout failed');
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      return await login(email, password); // 登录成功返回 true/false
    } catch (err) {
      console.error("Register error:", err);
      toast(err?.message || 'Register failed');
      return false;
    }
  }

  async function init() {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  const isLoggedIn = !!user;

  return (
    <UserContext.Provider value={{
      current: user,
      isLoggedIn,
      login,
      logout,
      register,
      loading,
    }}>
      {props.children}
    </UserContext.Provider>
  );
}
