import { useState, useMemo } from "react"
import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from "motion/react"
import { HugeiconsIcon } from '@hugeicons/react'
import { Search01Icon, Location01Icon, Briefcase02Icon, ArrowDown01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { nigeriaStatesAndLGAs } from "@/lib/nigeria-data"

import aboutImg from "@/assets/vision and mission.jpg"

import { getJobs, type Job } from "@/api/jobs"
import { submitApplication } from "@/api/applications"

export const Route = createFileRoute('/career/')({
  component: CareerPage,
  loader: async () => {
    const jobs = await getJobs()
    return { jobs }
  }
})

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function CareerPage() {
  const { jobs } = Route.useLoaderData()

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  const [applicantNationality, setApplicantNationality] = useState("Nigeria");
  const [applicantState, setApplicantState] = useState("");
  const [applicantLga, setApplicantLga] = useState("");

  const [isApplying, setIsApplying] = useState(false);
  const [applyError, setApplyError] = useState('');
  const [applySuccess, setApplySuccess] = useState(false);

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!applyingJob) return;

    setIsApplying(true);
    setApplyError('');
    setApplySuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      formData.set('jobTitle', 'General Application');
      formData.set('jobId', 'general');

      await submitApplication({ data: formData as any });
      setApplySuccess(true);
    } catch (err: any) {
      setApplyError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-28 md:h-36"></div>

      <section className="py-12 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column (Text) */}
          <div className="flex flex-col gap-8">
            <div className="max-w-xl">
              <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-4 leading-relaxed">
                Join Sevengate Group
              </motion.p>
              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
                Build The Future<br />Of Africa
              </motion.h1>
              <motion.div variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed text-lg space-y-4">
                <p>
                  We are always looking for driven, technical, and internationally-minded professionals to join our industry across technology, energy, mining infrastructure and construction.
                </p>
                <p>
                  Sevengate is an equal employment opportunity company. We work as a team and we win as a team. For more on how to join our team, contact us on <a href="mailto:career@sevengategroup.com" className="text-accent hover:underline">career@sevengategroup.com</a>
                </p>
              </motion.div>
            </div>

            {/* Submit CV Button */}
            <motion.div variants={fadeInUp} className="flex flex-col items-start border-t border-border pt-12">
              <button
                onClick={() => { setApplySuccess(false); setApplyingJob({ id: 'general', title: 'General Application' } as any); }}
                className="bg-accent text-white px-12 py-6 text-lg font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
              >
                Submit CV
              </button>
            </motion.div>
          </div>

          {/* Right Column (Image) */}
          <motion.div variants={fadeInUp} className="relative w-full rounded-none overflow-hidden shadow-2xl group bg-white">
            <img loading="lazy" src={aboutImg} alt="Career at Sevengate Group" className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>

        </motion.div>
      </section>

      {/* Opportunities Table Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="container-x max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground uppercase tracking-tight mb-4">
              Current Opportunities
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {jobs.length === 0 ? (
              <p className="text-muted-foreground col-span-full text-center py-10">No open positions at the moment.</p>
            ) : jobs.map((job: Job) => (
              <div key={job.id} className="group bg-white border border-gray-100 p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <div className="mb-8">
                  <div className="w-10 h-[2px] bg-accent/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-accent"></div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2 leading-tight">
                    {job.category}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light">
                    {job.title}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedJob(job);
                  }}
                  className="w-full inline-flex items-center justify-center bg-transparent border border-accent text-accent px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-accent hover:text-white"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatWidget />

      {/* Job Details Drawer */}
      <AnimatePresence>
        {selectedJob && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedJob(null);
                setApplySuccess(false);
              }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-background border-l border-border p-8 md:p-12 overflow-y-auto"
            >
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setApplySuccess(false);
                }}
                className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" />
              </button>

              <div className="flex flex-col gap-10 mt-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1.5">
                      {selectedJob.category}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-6">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-6 text-sm font-light text-muted-foreground border-y border-border py-6">
                    <div className="flex items-center gap-2">
                      <HugeiconsIcon icon={Location01Icon} className="w-5 h-5" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HugeiconsIcon icon={Briefcase02Icon} className="w-5 h-5" />
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 text-muted-foreground font-light leading-relaxed">
                  <div>
                    <h3 className="text-foreground font-semibold uppercase tracking-wide mb-4">About The Role</h3>
                    <p>{selectedJob.description}</p>
                  </div>

                  <div>
                    <h3 className="text-foreground font-semibold uppercase tracking-wide mb-4">Key Responsibilities</h3>
                    <ul className="list-disc list-outside ml-5 space-y-2">
                      {selectedJob.responsibilities?.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-foreground font-semibold uppercase tracking-wide mb-4">Requirements</h3>
                    <ul className="list-disc list-outside ml-5 space-y-2">
                      {selectedJob.requirements?.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <button
                    onClick={() => {
                      setSelectedJob(null);
                      setApplySuccess(false);
                      setApplyingJob(selectedJob);
                    }}
                    className="w-full md:w-auto inline-flex items-center justify-center bg-accent text-white px-10 py-5 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
                  >
                    Submit CV
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Comprehensive Application Modal */}
      <Dialog open={!!applyingJob} onOpenChange={(open) => !open && setApplyingJob(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background p-0 border-border">
          <div className="p-6 md:p-10">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight">
                Submit CV
              </DialogTitle>
            </DialogHeader>

            {applySuccess ? (
              <div className="text-green-600 bg-green-50 p-6 font-medium border border-green-200 rounded-sm text-center">
                <h3 className="text-xl mb-2 font-semibold">Application Submitted</h3>
                <p>Your application has been successfully submitted! We will be in touch soon.</p>
                <button
                  onClick={() => setApplyingJob(null)}
                  className="mt-6 px-8 py-3 bg-accent text-white font-semibold uppercase tracking-widest hover:bg-accent/90"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-10">
                {applyError && <div className="text-red-500 bg-red-50 p-4 text-sm font-medium border border-red-200">{applyError}</div>}

                {/* Section 1: Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2">
                    1. Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Full Name (As on ID) *</label>
                      <input type="text" name="fullName" required className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Date of Birth</label>
                      <input type="date" name="dob" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Gender</label>
                      <select name="gender" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Nationality</label>
                      <select
                        value={applicantNationality === "Nigeria" ? "Nigeria" : "Other"}
                        onChange={(e) => {
                          setApplicantNationality(e.target.value);
                          setApplicantState("");
                          setApplicantLga("");
                        }}
                        className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
                      >
                        <option value="Nigeria">Nigeria</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {applicantNationality === "Nigeria" ? (
                      <>
                        <input type="hidden" name="nationality" value="Nigeria" />
                        <input type="hidden" name="stateOfOrigin" value={`${applicantState}${applicantLga ? ` - ${applicantLga}` : ''}`} />
                        <div>
                          <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">State of Origin</label>
                          <select value={applicantState} onChange={(e) => { setApplicantState(e.target.value); setApplicantLga(""); }} className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" required>
                            <option value="">Select State</option>
                            {Object.keys(nigeriaStatesAndLGAs).map(state => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">LGA of Origin</label>
                          <select value={applicantLga} onChange={(e) => setApplicantLga(e.target.value)} className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" required disabled={!applicantState}>
                            <option value="">Select LGA</option>
                            {applicantState && nigeriaStatesAndLGAs[applicantState]?.map(lga => (
                              <option key={lga} value={lga}>{lga}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Specify Nationality *</label>
                          <input type="text" name="nationality" value={applicantNationality === "Other" ? "" : applicantNationality} onChange={(e) => setApplicantNationality(e.target.value)} className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" required placeholder="e.g. Ghana" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">State / Province / Region</label>
                          <input type="text" name="stateOfOrigin" value={applicantState} onChange={(e) => setApplicantState(e.target.value)} className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" required />
                        </div>
                      </>
                    )}
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Phone Number *</label>
                      <input type="tel" name="phone" required className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Email Address *</label>
                      <input type="email" name="email" required className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Home Address</label>
                      <input type="text" name="homeAddress" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Current Location (City/State)</label>
                      <input type="text" name="currentLocation" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Marital Status</label>
                      <select name="maritalStatus" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none">
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Emergency Contact Name</label>
                      <input type="text" name="emergencyContactName" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Emergency Contact Phone</label>
                      <input type="tel" name="emergencyContactPhone" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                  </div>
                </div>

                {/* Section 2: Education & Work Information */}
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2">
                    2. Education & Work Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Highest Qualification</label>
                      <select name="highestQualification" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none">
                        <option value="">Select Qualification</option>
                        <option value="PhD">PhD</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="HND">HND</option>
                        <option value="OND/ND">OND/ND</option>
                        <option value="Diploma">Diploma</option>
                        <option value="SSCE/WAEC/NECO">SSCE/WAEC/NECO</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Institution Name</label>
                      <input type="text" name="institutionName" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Year of Graduation</label>
                      <input type="text" name="graduationYear" placeholder="e.g. 2020" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Course of Study / Field</label>
                      <input type="text" name="courseOfStudy" className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Professional Certifications</label>
                      <textarea name="certifications" rows={2} placeholder="List any relevant certifications..." className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Work Experience</label>
                      <textarea name="workExperience" rows={4} placeholder="Company, Role, Duration, Responsibilities..." className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">Skills</label>
                      <textarea name="skills" rows={3} placeholder="Technical skills, Languages, Software tools..." className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none"></textarea>
                    </div>
                  </div>
                </div>

                {/* Section 3: CV Upload */}
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2">
                    3. Upload CV
                  </h3>
                  <div>
                    <label className="block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2">CV / Resume (PDF, DOCX) *</label>
                    <input type="file" name="cv" accept=".pdf,.doc,.docx" required className="w-full p-3 bg-transparent border border-border focus:border-accent outline-none file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer" />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="px-8 py-4 font-semibold uppercase tracking-widest border border-border hover:bg-muted/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isApplying}
                    className="bg-accent text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors disabled:opacity-50 inline-flex items-center justify-center min-w-[200px]"
                  >
                    {isApplying ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}

