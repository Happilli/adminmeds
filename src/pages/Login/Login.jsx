import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AtIcon, EyesIcon } from "@phosphor-icons/react";

function Login() {
  const navigate = useNavigate();
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const adminEmail = "";
    const adminPassword = "";
    if (email === adminEmail && password === adminPassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="relative w-full max-w-md">
        <div
          className="absolute -inset-x-10 -inset-y-8 border border-outline-variant opacity-50 pointer-events-none"
          style={{ borderRadius: "50% 62% 55% 45% / 68% 36% 64% 52%" }}
        />

        <div className="relative px-10 py-4">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/logo.png"
              alt="MediSync"
              className="w-24 h-24 rounded-2xl mb-4 object-contain"
            />
            <h1 className="text-2xl font-semibold text-on-surface mb-1">MediSync</h1>
            <p className="text-sm text-on-surface-variant">Sign in to your Hospital admin account</p>
          </div>

          <form onSubmit={handleLogin} autoComplete="off" className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">
                Email
              </label>
              <div className="flex items-center gap-3 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors">
                <AtIcon size={20} className="text-outline flex-shrink-0" />
                <input
                  type="email"
                  placeholder="you@hospital.com"
                  value={email}
                  autoComplete="username"
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-2">
                Password
              </label>
              <div className="flex items-center gap-3 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors">
                <EyesIcon
                  size={20}
                  weight="fill"
                  className={`text-outline flex-shrink-0 transition-transform duration-300 ${isPasswordFocused ? "" : "-scale-x-100"
                    }`}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  autoComplete="current-password"
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end text-sm py-1">
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary-fixed-dim transition-colors mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;