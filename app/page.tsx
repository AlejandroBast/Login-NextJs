"use client";

import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-96 h-96 relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/astro.jpg"
                alt="Astro"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <h1 className="text-3xl font-bold text-black mb-10">Create Account</h1>

            <div className="flex gap-3 mb-8">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition">
                Sign up with Google
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition">
                with Facebook
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm mb-8">Or sign up using your email address</p>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email or Phone no."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to all terms and Privacy Policy
                </label>
              </div>

              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-lg transition mt-6">
                Sign up
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already a member?{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden max-w-sm mx-auto">
          <div className="w-full h-64 relative rounded-2xl overflow-hidden shadow-xl mb-6">
            <Image
              src="/astro.jpg"
              alt="Astro"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <h1 className="text-2xl font-bold text-black mb-6">Create Account</h1>

            <div className="flex gap-2 mb-6">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg transition text-sm">
                Sign up
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-3 rounded-lg transition text-sm">
                with Facebook
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50 text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email or Phone no."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50 text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50 text-sm"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition bg-gray-50 text-sm"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms-mobile"
                  className="w-4 h-4"
                />
                <label htmlFor="terms-mobile" className="text-xs text-gray-600">
                  I agree to all terms and Privacy Policy
                </label>
              </div>

              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition mt-6 text-sm">
                Sign up
              </button>

              <p className="text-center text-xs text-gray-600 mt-3">
                Already a member?{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
