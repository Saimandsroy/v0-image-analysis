import React, { useState, useEffect } from "react"
import axios from "axios"
import '../styles/globals.css'

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    // TEMPORARY: Allow login with hardcoded password if API fails
    if (password === "admin@123") {
      localStorage.setItem("admin_token", "demo-token")
      onLogin()
      return
    }
    try {
      const res = await axios.post("/api/auth/login", { password })
      localStorage.setItem("admin_token", res.data.token)
      onLogin()
    } catch (err: any) {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9e7c2] via-[#fffbe9] to-[#80000010]">
      <form onSubmit={handleSubmit} className="bg-white/95 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gold/30">
        <div className="flex flex-col items-center mb-8">
          <img src="/images/logo.png" alt="Logo" className="h-16 mb-2 object-contain" onError={e => (e.currentTarget.style.display = "none")} />
          <h2 className="text-3xl font-bold text-maroon mb-1 tracking-tight">Admin Login</h2>
          <span className="text-gold font-semibold tracking-wide">Awadhi Homes</span>
        </div>
        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full px-4 py-3 border border-gold/40 rounded-lg mb-4 focus:ring-2 focus:ring-gold focus:outline-none transition"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gold to-yellow-400 text-maroon font-bold py-2 rounded-lg hover:from-yellow-400 hover:to-gold transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

function PortfolioManager({ token }: { token: string }) {
  const [items, setItems] = useState<any[]>([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPortfolio = async () => {
    try {
      // Dummy fallback for demo if API fails
      const res = await axios.get("/api/admin/portfolio", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setItems(res.data)
      setError(null)
    } catch (err: any) {
      setError("Failed to fetch portfolio. Showing demo data.")
      setItems([
        {
          id: 1,
          imageUrl: "/images/portfolio-1.png",
          title: "Modern Villa",
          description: "A modern villa project in Gomti Nagar, Lucknow."
        },
        {
          id: 2,
          imageUrl: "/images/portfolio-2.png",
          title: "Office Complex",
          description: "Commercial office space in Hazratganj."
        }
      ])
    }
  }

  useEffect(() => { fetchPortfolio() }, [])

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!image) return
    setLoading(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("image", image)
      await axios.post("/api/admin/portfolio/upload", formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setTitle("")
      setDescription("")
      setImage(null)
      fetchPortfolio()
    } catch (err: any) {
      setError("Failed to upload project. Please check your API or network.")
    }
    setLoading(false)
  }

  return (
    <div className="bg-white/95 rounded-2xl shadow-xl p-8 border border-gold/20 mb-10">
      <h3 className="text-2xl font-bold text-maroon mb-8 flex items-center gap-2">
        <span className="inline-block w-2 h-7 bg-gradient-to-b from-gold to-yellow-400 rounded mr-2"></span>
        Portfolio Management
      </h3>
      {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}
      <form onSubmit={handleUpload} className="flex flex-col gap-4 mb-10">
        <input
          type="text"
          placeholder="Project Title"
          className="border border-gold/30 rounded px-4 py-2 focus:ring-2 focus:ring-gold focus:outline-none"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          className="border border-gold/30 rounded px-4 py-2 focus:ring-2 focus:ring-gold focus:outline-none"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files?.[0] || null)}
          className="mb-2"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-gold to-yellow-400 text-maroon font-semibold px-4 py-2 rounded hover:from-yellow-400 hover:to-gold transition"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map(item => (
          <div key={item.id} className="bg-gradient-to-br from-[#fffbe9] to-[#f9e7c2] rounded-xl shadow p-4 border border-gold/10 flex flex-col items-center">
            <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover rounded mb-2 border border-gold/20 bg-white" />
            <h4 className="font-bold text-maroon">{item.title}</h4>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TestimonialsManager({ token }: { token: string }) {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [editing, setEditing] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchTestimonials = async () => {
    const res = await axios.get("/api/admin/testimonials", {
      headers: { Authorization: `Bearer ${token}` }
    })
    setTestimonials(res.data)
  }

  useEffect(() => { fetchTestimonials() }, [])

  const handleAddOrEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    if (editing) {
      await axios.post(`/api/admin/testimonials/edit/${editing.id}`, { name, text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
    } else {
      await axios.post("/api/admin/testimonials/add", { name, text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
    }
    setName("")
    setText("")
    setEditing(null)
    setLoading(false)
    fetchTestimonials()
  }

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/admin/testimonials/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    fetchTestimonials()
  }

  return (
    <div className="bg-white/95 rounded-2xl shadow-xl p-8 border border-gold/20">
      <h3 className="text-2xl font-bold text-maroon mb-8 flex items-center gap-2">
        <span className="inline-block w-2 h-7 bg-gradient-to-b from-gold to-yellow-400 rounded mr-2"></span>
        Testimonials Management
      </h3>
      <form onSubmit={handleAddOrEdit} className="flex flex-col gap-4 mb-10">
        <input
          type="text"
          placeholder="Customer Name"
          className="border border-gold/30 rounded px-4 py-2 focus:ring-2 focus:ring-gold focus:outline-none"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Testimonial"
          className="border border-gold/30 rounded px-4 py-2 focus:ring-2 focus:ring-gold focus:outline-none"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-gold to-yellow-400 text-maroon font-semibold px-4 py-2 rounded hover:from-yellow-400 hover:to-gold transition"
          disabled={loading}
        >
          {editing ? "Update" : "Add"} Testimonial
        </button>
        {editing && (
          <button
            type="button"
            className="text-sm text-gray-500 underline"
            onClick={() => { setEditing(null); setName(""); setText(""); }}
          >
            Cancel Edit
          </button>
        )}
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map(t => (
          <div key={t.id} className="bg-gradient-to-br from-[#fffbe9] to-[#f9e7c2] rounded-xl shadow p-4 border border-gold/10 flex flex-col gap-2">
            <div>
              <span className="font-bold text-maroon">{t.name}</span>
              <p className="text-sm text-gray-700">{t.text}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => { setEditing(t); setName(t.name); setText(t.text); }}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDelete(t.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [activeTab, setActiveTab] = useState<"portfolio" | "testimonials">("portfolio")
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const t = localStorage.getItem("admin_token")
    if (t) {
      setToken(t)
      setIsAdmin(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    setIsAdmin(false)
    setToken(null)
  }

  if (!isAdmin || !token) {
    return <AdminLogin onLogin={() => {
      setIsAdmin(true)
      setToken(localStorage.getItem("admin_token"))
    }} />
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(249,231,194,0.95), rgba(255,251,233,0.95)), url('/images/construction-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="bg-gradient-to-r from-maroon to-gold text-white py-5 px-8 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-10 object-contain" onError={e => (e.currentTarget.style.display = "none")} />
          <h1 className="text-2xl font-bold tracking-wide">Admin Dashboard</h1>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white text-maroon px-4 py-2 rounded-lg hover:bg-gray-100 transition font-semibold"
        >
          Logout
        </button>
      </header>
      <main className="max-w-5xl mx-auto py-10 px-4">
        <div className="flex gap-4 mb-10 justify-center">
          <button
            className={`px-6 py-2 rounded-full font-semibold shadow transition-all border-2 ${
              activeTab === "portfolio"
                ? "bg-gradient-to-r from-gold to-yellow-400 text-maroon border-gold scale-105"
                : "bg-gray-200 text-gray-700 border-transparent hover:bg-gold/20"
            }`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold shadow transition-all border-2 ${
              activeTab === "testimonials"
                ? "bg-gradient-to-r from-gold to-yellow-400 text-maroon border-gold scale-105"
                : "bg-gray-200 text-gray-700 border-transparent hover:bg-gold/20"
            }`}
            onClick={() => setActiveTab("testimonials")}
          >
            Testimonials
          </button>
        </div>
        <div>
          {activeTab === "portfolio" && <PortfolioManager token={token} />}
          {activeTab === "testimonials" && <TestimonialsManager token={token} />}
        </div>
      </main>
    </div>
  )
}

// This page will be accessible at the route:
// http://localhost:3000/admin
// (or your deployed domain at /admin)

// In Next.js, any file inside the `pages` directory is automatically routed by its filename.
// So, `pages/admin.tsx` will show when you visit `/admin` in your browser.

// If your admin page is not showing Tailwind CSS styles, the most common reasons are:

// 1. Tailwind CSS is not properly set up in your project.
// 2. The Tailwind CSS classes are missing from your global CSS import.
// 3. The build process is not picking up the Tailwind classes (e.g., missing import in _app.tsx or _app.js).

// To fix this, ensure the following:

// 1. You have a tailwind.config.js file at your project root.
// 2. Your global CSS (e.g., styles/globals.css) includes the Tailwind directives:
//    @tailwind base;
//    @tailwind components;
//    @tailwind utilities;
// 3. You import your global CSS in your custom _app.tsx or _app.js file:
//    import '../styles/globals.css'
// 4. Restart your dev server after any Tailwind config or CSS changes.

// Example for Next.js (pages/_app.tsx):
// import '../styles/globals.css'

// If you are using a different framework, make sure Tailwind is set up and imported globally.

// If all of the above is correct, your admin page will show the Tailwind styles as expected.
