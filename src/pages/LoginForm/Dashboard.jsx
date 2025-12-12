export default function Dashboard({ user }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Your email: {user.email}</p>
      <h3>You are logged in successfully!</h3>
    </div>
  );
}
