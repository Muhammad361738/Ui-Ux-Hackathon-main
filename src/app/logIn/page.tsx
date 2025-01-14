import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import Hero from "./Hero";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <Hero/>
      {/* Signin Form */}
      <section className="py-8">
        <div className="container  mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <Link
            href="/signup"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold p-3 px-20 sm:px-40 rounded"
            >
              Sign In
            </Link>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FcGoogle className="h-6 mr-2" />
              Sign in with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <ImAppleinc className="h-6 mr-2" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>

         </div>
  );
}