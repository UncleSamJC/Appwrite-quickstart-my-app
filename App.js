<View style={styles.root}>
    <Text>
    {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
    </Text>
    <View>
    <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
    />
    <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
    />
    <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
    />

    <TouchableOpacity
        style={styles.button}
        onPress={() => login(email, password)}
    >
        <Text>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={()=> register(email, password, name)}
    >
        <Text>Register</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={async () => {
        await account.deleteSession('current');
        setLoggedInUser(null);
        }}
    >
        <Text>Logout</Text>
    </TouchableOpacity>
    </View>
</View>



const styles = StyleSheet.create({
    root: {
      marginTop: 40, 
      marginBottom: 40
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'gray',
      padding: 10,
      marginBottom: 10,
      alignItems: 'center',
    },
  });
  