function Dashboard() {
  const username = localStorage.getItem("username");

  return (
    <div>
      <h1>Welcome, {username}</h1>
    </div>
  );
}

export default Dashboard;