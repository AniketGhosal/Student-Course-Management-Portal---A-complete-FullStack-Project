const BASE_URL = '/api/courses';

export const getCourses = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json(); // ✅ Parse JSON here
    return data;
  } catch (err) {
    console.error('Error fetching courses:', err);
    throw err;
  }
};

export const addCourse = async (courseData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(courseData),
    });
    return await res.json();
  } catch (err) {
    console.error('Error adding course:', err);
    throw err;
  }
};

export const deleteCourse = async (courseId) => {
  try {
    const res = await fetch(`${BASE_URL}/${courseId}`, {
      method: 'DELETE',
    });
    return await res.json();
  } catch (err) {
    console.error('Error deleting course:', err);
    throw err;
  }
};