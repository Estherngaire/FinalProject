function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 transition text-white p-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>

        {/* Extra links */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-purple-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;