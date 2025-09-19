import React, { useState, useEffect } from 'react';
import { addCourse, deleteCourse, getCourses } from '../../services/courseService';
import './ManageCourses.css';

const ManageCourses = () => {
  const [form, setForm] = useState({ title: '', description: '', category: '', image: '', price: '' });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse(form);
    setForm({ title: '', description: '', category: '', image: '', price: '' });
    const updated = await getCourses().then(res => res.json());
    setCourses(updated);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    const updated = await getCourses().then(res => res.json());
    setCourses(updated);
  };

  return (
    <div className="manage-courses">
      <h3>Manage Courses</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
        <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required />
        <input type="text" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} required />
        <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
        <button type="submit">Publish</button>
      </form>

      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-item">
            <span>{course.title}</span>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;