const profile = () => {
  const session = { name: "NUEVO USUARIO", role: "ADMIN" };
  return (
    <div>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={() => (window.location.href = "api/auth/logout")}
      >
        Logout
      </button>
      <h1 className="text-3xl">Profile</h1>
      <p>{session.name}</p>
      <p>{session.role}</p>
    </div>
  );
};

export default profile;
