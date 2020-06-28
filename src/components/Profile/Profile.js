const Profile = () => {
    const { user } = useAuth0();

    // if (user) {
    //     return (
    //         <>
    //             <img src={user.picture} alt="Profile" />
    //             <h2>{user.name}</h2>
    //             <p>{user.email}</p>
    //             <code>{JSON.stringify(user, null, 2)}</code>
    //         </>
    //     )
    // } else {
    //     return null
    // }
    return null
};

export default Profile;