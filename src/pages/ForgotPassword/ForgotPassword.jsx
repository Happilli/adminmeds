import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, EyesIcon } from "@phosphor-icons/react";
import { forgotPasswordCheck, forgotPasswordVerify } from "../../api/authApi";

function ForgotPassword() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const inputClass = "flex-1 bg-transparent outline-none placeholder:text-outline text-sm text-on-surface";
    const wrapClass = "flex items-center gap-3 bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus-within:border-primary transition-colors";

    const handleCheck = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const data = await forgotPasswordCheck(email);
            setQuestion(data.question);
            setStep(2);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        setError("");

        if (newPassword.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            await forgotPasswordVerify({ email, security_answer: securityAnswer, new_password: newPassword });
            setSuccess("Password reset. Redirecting to login...");
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="relative w-full max-w-md">
                <div
                    className="absolute -inset-x-10 -inset-y-8 border border-outline-variant opacity-50 pointer-events-none"
                    style={{ borderRadius: "60% 100% 55% 25% / 58% 36% 24% 22%" }}
                />

                <div className="relative px-10 py-4">
                    <div className="flex flex-col items-center mb-8">
                        <img src="/logo.png" alt="MediSync" className="w-24 h-24 rounded-2xl mb-4 object-contain" />
                        <h1 className="text-2xl font-semibold text-on-surface mb-1">Reset Password</h1>
                        <p className="text-sm text-on-surface-variant text-center">
                            {step === 1
                                ? "Enter your hospital account email to continue."
                                : "Answer your security question and set a new password."}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 px-4 py-3 rounded-xl bg-error-container/20 text-error text-sm">{error}</div>
                    )}
                    {success && (
                        <div className="mb-4 px-4 py-3 rounded-xl bg-tertiary-container/20 text-tertiary text-sm">{success}</div>
                    )}

                    {step === 1 && (
                        <form onSubmit={handleCheck} className="flex flex-col gap-4">
                            <div className={wrapClass}>
                                <EnvelopeIcon size={20} className="text-outline shrink-0" />
                                <input
                                    type="email"
                                    placeholder="you@hospital.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary-fixed-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Checking..." : "Continue"}
                            </button>
                        </form>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleVerify} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-on-surface-variant mb-2">{question}</label>
                                <div className={wrapClass}>
                                    <input
                                        type="text"
                                        placeholder="Your answer"
                                        value={securityAnswer}
                                        onChange={(e) => setSecurityAnswer(e.target.value)}
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-on-surface-variant mb-2">New Password</label>
                                <div className={wrapClass}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="New password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        className={inputClass}
                                    />
                                    <button type="button" onClick={() => setShowPassword((p) => !p)} className="text-on-surface-variant cursor-pointer">
                                        <EyesIcon size={20} weight="fill" className={showPassword ? "-scale-x-100" : ""} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-on-surface-variant mb-2">Confirm Password</label>
                                <div className={wrapClass}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary-fixed-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </form>
                    )}

                    <div className="flex justify-center text-sm py-4">
                        <button type="button" onClick={() => navigate("/")} className="text-primary hover:underline cursor-pointer">
                            Back to login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;