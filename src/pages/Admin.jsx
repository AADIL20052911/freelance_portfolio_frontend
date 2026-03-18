import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, fetchProjects, createProject, deleteProject } from '../services/api';

export default function Admin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [token, setToken] = useState(localStorage.getItem('admin_token') || '');
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    fetchProjects().then(setProjects).catch(console.error);
  }, [token]);

  const onLogin = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });
    try {
      const response = await login(credentials);
      localStorage.setItem('admin_token', response.token);
      setToken(response.token);
      setStatus({ loading: false, error: '', success: 'Logged in!' });
    } catch (err) {
      setStatus({ loading: false, error: 'Invalid credentials', success: '' });
    }
  };

  const onLogout = () => {
    setToken('');
    localStorage.removeItem('admin_token');
    setProjects([]);
    navigate('/');
  };

  const onCreateProject = async () => {
    const title = prompt('Project title');
    if (!title) return;
    const description = prompt('Short description');
    const techStack = prompt('Tech stack (comma separated)');
    try {
      await createProject(
        {
          title,
          description,
          techStack: techStack?.split(',').map((s) => s.trim()).filter(Boolean),
          githubUrl: '',
          demoUrl: '',
          imageUrl: '',
        },
        token
      );
      const updated = await fetchProjects();
      setProjects(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteProject = async (id) => {
    if (!confirm('Delete this project?')) return;
    try {
      await deleteProject(id, token);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!token) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Admin login</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Use your admin credentials to manage projects and messages.</p>

        <form onSubmit={onLogin} className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>
          {status.error ? <p className="text-sm text-rose-600 dark:text-rose-300">{status.error}</p> : null}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            disabled={status.loading}
          >
            {status.loading ? 'Logging in…' : 'Login'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Admin Panel</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Manage projects and view messages (via API).</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onCreateProject}
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            + Add project
          </button>
          <button
            onClick={onLogout}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-950/40 dark:text-slate-300">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Tech Stack</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-4 py-3">{project.title}</td>
                <td className="px-4 py-3">
                  {project.techStack?.join(', ') || '—'}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => onDeleteProject(project._id)}
                    className="rounded-lg bg-rose-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-rose-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
