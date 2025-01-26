"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const SignInForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate OTP
    if (!otp || otp.length !== 6) {
      setError("Passcode is required and must be 6 characters.");
      return;
    }

    setLoading(true); // Set loading to true when submitting the form
    setError(""); // Clear previous errors

    if (otp) {
      const giveAccess = process.env.NEXT_PUBLIC_ADMIN_KEY === otp;
      if (giveAccess) {
        router.push(`/admin?signIn=${true}`);
      } else {
        setLoading(false);
        setOtp("");
        setError("Invalid access code");
      }
    }
  };

  return (
    <section className="md:min-w-[400px] mx-auto bg-white rounded-xl max-md:w-full min-h-[300px] border px-4 py-10">
      <form onSubmit={handleSubmit}>
        <h3 className="font-aeoBold">
          <span className="text-primary">Welcome Admin,</span> <br /> Enter
          Passcode
        </h3>
        <div className="mt-12">
          <InputOTPDemo otp={otp} setOtp={setOtp} />
          {error && (
            <p className="text-red-500 mt-1 text-xs font-aeoReg pl-2 md:text-sm">{error}</p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full h-[48px] shadow-none font-aeoBold tracking-wider mt-7 hover:ring-1 hover:ring-primary hover:text-primary"
        >
          {loading ? <Loader2 className="animate-spin" /> : "SignIn"}
        </Button>
      </form>
    </section>
  );
};

export function InputOTPDemo({ otp, setOtp }) {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      value={otp}
      onChange={(e) => setOtp(e)}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}

export default SignInForm;
