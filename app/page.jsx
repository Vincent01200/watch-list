import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 ">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl text-white font-extrabold">Welcome To Watch Lists</h1>
        <p className="text-3xl text-white font-bold p-4">Before we get through to next website. Please sign in first</p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AuthForm/>
        </div>
      </div>
    </div>
  )
}
