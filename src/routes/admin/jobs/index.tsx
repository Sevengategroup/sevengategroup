import { createFileRoute, Link, useRouter } from '@tanstack/react-router';
import { getJobs, deleteJob } from '@/api/jobs';
import { HugeiconsIcon } from '@hugeicons/react';
import { Delete01Icon, Edit01Icon, PlusSignIcon } from '@hugeicons/core-free-icons';

export const Route = createFileRoute('/admin/jobs/')({
  component: AdminJobs,
  loader: async () => {
    const jobs = await getJobs();
    return { jobs };
  },
});

function AdminJobs() {
  const { jobs } = Route.useLoaderData();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this job?')) {
      try {
        await deleteJob({ data: id });
        router.invalidate();
      } catch (e) {
        alert('Failed to delete job.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display uppercase tracking-widest font-bold">Manage Jobs</h1>
          <Link
            to="/admin/jobs/new"
            className="flex items-center gap-2 bg-accent text-white px-6 py-3 font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            <HugeiconsIcon icon={PlusSignIcon} />
            Post New Job
          </Link>
        </div>

        <div className="bg-white border border-border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold uppercase tracking-widest text-sm">Title</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-widest text-sm">Category</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-widest text-sm">Type</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-widest text-sm">Location</th>
                <th className="px-6 py-4 font-semibold uppercase tracking-widest text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job: any) => (
                <tr key={job.id} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4 font-medium">{job.title}</td>
                  <td className="px-6 py-4"><span className="text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 px-2 py-1">{job.category}</span></td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{job.type}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{job.location}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-4">
                      {/* <Link to={`/admin/jobs/${job.id}/edit`} className="text-foreground hover:text-accent transition-colors">
                        <HugeiconsIcon icon={Edit01Icon} className="w-5 h-5" />
                      </Link> */}
                      <button onClick={() => handleDelete(job.id)} className="text-red-500 hover:text-red-700 transition-colors">
                        <HugeiconsIcon icon={Delete01Icon} className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                    No jobs posted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
