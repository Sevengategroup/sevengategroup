import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { createJob } from '@/api/jobs'
import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'

export const Route = createFileRoute('/admin/jobs/new')({
  component: NewJobPage,
})

function NewJobPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: 'Full-Time',
    location: '',
    description: '',
    responsibilities: '',
    requirements: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const responsibilitiesArray = formData.responsibilities
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean)

      const requirementsArray = formData.requirements
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean)

      await createJob({
        data: {
          title: formData.title,
          category: formData.category,
          type: formData.type,
          location: formData.location,
          description: formData.description,
          responsibilities: responsibilitiesArray,
          requirements: requirementsArray,
        }
      })

      // Redirect to admin jobs
      navigate({ to: '/admin/jobs' })
    } catch (err: any) {
      setError(err.message || 'Failed to create job')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="h-28 md:h-36"></div>

      <section className="py-12 md:py-24 container-x max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-display text-4xl font-normal text-foreground uppercase tracking-tight">
            Post a New Job
          </h1>
          <p className="text-muted-foreground mt-4">
            Create a new job posting that will appear on the Career page.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 mb-8">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Job Title</label>
              <input
                required
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors"
                placeholder="e.g. Senior Structural Engineer"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Category</label>
              <input
                required
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors"
                placeholder="e.g. Engineering"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Job Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors appearance-none"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Location</label>
              <input
                required
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors"
                placeholder="e.g. Lagos, Nigeria"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Description</label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors"
              placeholder="Brief overview of the role..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Responsibilities (One per line)</label>
            <textarea
              required
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors"
              placeholder="Enter responsibilities, separated by newlines"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Requirements (One per line)</label>
            <textarea
              required
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors"
              placeholder="Enter requirements, separated by newlines"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-10 py-5 bg-accent text-white uppercase tracking-widest font-semibold hover:-translate-y-1 transition-transform disabled:opacity-50"
          >
            {loading ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </section>
      
      <Footer />
    </main>
  )
}
