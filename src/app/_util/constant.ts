export const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODk2ZmM0MDAyNjgzOGYxMDgxODE3ZTkzYzNhMDM4ZSIsIm5iZiI6MTczNzM0MjI0Ny4xOTEsInN1YiI6IjY3OGRiZDI3NjhlMGQ4NzM2MzZlMWExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wl3C8841nWh_9RLFjnKLRMH2ZXaPdU46spcQ1YCnWtk";
  export const formatRuntime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };