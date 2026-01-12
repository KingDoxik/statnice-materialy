export interface ParallelOptions {
  onProgress?: (completed: number, total: number, current: string) => void;
}

export interface ParallelResult<T> {
  results: PromiseSettledResult<T>[];
  successful: number;
  failed: number;
}

/**
 * Executes async tasks with a configurable concurrency limit.
 * All tasks continue even if some fail (Promise.allSettled behavior).
 */
export async function runWithConcurrency<T>(
  tasks: Array<{ name: string; fn: () => Promise<T> }>,
  concurrency: number,
  options?: ParallelOptions
): Promise<ParallelResult<T>> {
  const results: PromiseSettledResult<T>[] = new Array(tasks.length);
  let currentIndex = 0;
  let completedCount = 0;

  async function runNext(): Promise<void> {
    while (currentIndex < tasks.length) {
      const index = currentIndex++;
      const task = tasks[index];

      options?.onProgress?.(completedCount, tasks.length, task.name);

      try {
        const result = await task.fn();
        results[index] = { status: "fulfilled", value: result };
      } catch (error) {
        results[index] = { status: "rejected", reason: error };
      }

      completedCount++;
    }
  }

  // Start `concurrency` number of workers
  const workers = Array(Math.min(concurrency, tasks.length))
    .fill(null)
    .map(() => runNext());

  await Promise.all(workers);

  const successful = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected").length;

  return { results, successful, failed };
}
