export default function WelcomeMessage({ isAdmin }) {
    return (
        <>
            {isAdmin && (
                <h1>Welcome to React Class</h1>
            )}
            {!isAdmin && (
                <h1> Please Login with Admin Account</h1>
            )}
        </>
    )
}
