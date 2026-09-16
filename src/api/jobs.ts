import { createServerFn } from '@tanstack/react-start';
import { prisma } from '../lib/prisma';
import { requireAdmin } from './auth';

export type Job = {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const getJobs = createServerFn({ method: 'GET' })
  .handler(async () => {
    try {
      const jobs = await prisma.job.findMany({
        orderBy: { createdAt: 'desc' }
      });
      return jobs.map((j: any) => ({
        ...j,
        responsibilities: JSON.parse(j.responsibilities),
        requirements: JSON.parse(j.requirements)
      })) as Job[];
    } catch (error) {
      console.error('Error reading jobs:', error);
      return [];
    }
  });

export const createJob = createServerFn({ method: 'POST' })
  .validator((job: Omit<Job, 'id'>) => job)
  .handler(async ({ data }) => {
    await requireAdmin();
    try {
      const newJob = await prisma.job.create({
        data: {
          title: data.title,
          category: data.category,
          type: data.type,
          location: data.location,
          description: data.description,
          responsibilities: JSON.stringify(data.responsibilities),
          requirements: JSON.stringify(data.requirements)
        }
      });
      return {
        ...newJob,
        responsibilities: JSON.parse(newJob.responsibilities),
        requirements: JSON.parse(newJob.requirements)
      } as Job;
    } catch (error) {
      console.error('Error writing job:', error);
      throw new Error('Failed to create job');
    }
  });

export const deleteJob = createServerFn({ method: 'POST' })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    await requireAdmin();
    try {
      await prisma.job.delete({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error('Error deleting job:', error);
      throw new Error('Failed to delete job');
    }
  });

