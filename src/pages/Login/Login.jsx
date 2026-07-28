import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AtIcon, EyesIcon } from "@phosphor-icons/react";
import { loginRequest } from "../../api/authApi";

function Login() {
  const navigate = useNavigate();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isAnyFieldFocused = isEmailFocused || isPasswordFocused;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginRequest(email, password);

      if (data.role !== "hospital") {
        setError("This portal is for hospital admins only.");
        return;
      }

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("email", data.email);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="relative w-full max-w-md">
        <div
          className={`absolute -inset-x-10 -inset-y-8 border pointer-events-none transition-all duration-300 ${isAnyFieldFocused
            ? "border-outline opacity-100"
            : "border-outline-variant opacity-50"
            }`}
          style={{ borderRadius: "60% 100% 55% 25% / 58% 36% 24% 22%" }}
        />

        <div className="relative px-10 py-4">
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.png" alt="MediSync" className="w-24 h-24 rounded-2xl mb-4 object-contain" />
            <h1 className="text-2xl font-semibold text-on-surface mb-1">MediSync</h1>
            <p className="text-sm text-on-surface-variant">Sign in to your Hospital admin account</p>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-error-container/20 text-error text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} autoComplete="off" className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Email</label>
              <div className="flex items-center gap-3 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors">
                <AtIcon size={20} className={`text-outline shrink-0 transition-all duration-300 ${isEmailFocused ? "brightness-150" : ""}`} />
                <input
                  type="email"
                  placeholder="you@hospital.com.np"
                  value={email}
                  autoComplete="username"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 bg-transparent outline-none placeholder:text-outline text-sm transition-colors duration-300 ${isEmailFocused ? "text-on-surface" : "text-on-surface-variant"}`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">Password</label>
              <div className="flex items-center gap-3 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors">
                <EyesIcon size={20} weight="fill" className={`text-outline shrink-0 transition-all duration-300 ${isPasswordFocused ? "brightness-150 -scale-x-100" : ""}`} />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  autoComplete="current-password"
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`flex-1 bg-transparent outline-none placeholder:text-outline text-sm transition-colors duration-300 ${isPasswordFocused ? "text-on-surface" : "text-on-surface-variant"}`}
                />
              </div>
            </div>

            <div className="flex justify-end text-sm py-1">
              <button type="button" onClick={() => navigate("/forgot-password")} className="text-primary hover:underline cursor-pointer">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary-fixed-dim transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;