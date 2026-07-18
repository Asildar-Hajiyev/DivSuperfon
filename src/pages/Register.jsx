import { Link } from "react-router-dom";
import LoginRegisterLeft from "../components/LoginRegisterLeft";


function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 flex items-center justify-center px-4 py-12 md:px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* sol hisse */}
        <LoginRegisterLeft/>

        {/* Right Side - Form */}
        <div className="md:col-span-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-10 max-w-lg w-full mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Hesab Yaradın
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Məlumatlarınızı daxil edərək qeydiyyatdan keçin
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                Tam Adınız
              </label>
              <input
                id="name"
                type="text"
                placeholder="Asildar Hacıyev"
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                E-poçt
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                  Şifrə
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700">
                  Şifrənin təsdiqi
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] mt-2">
              Qeydiyyatdan Keç
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400">və ya</span>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500">
            Artıq hesabınız var?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline cursor-pointer transition">
              Daxil olun
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;