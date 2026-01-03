export const studentData = {
  name: "Budi Santoso",
  id: "NISN-12345678",
  class: "XII IPA 2",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  stats: {
    gpa: 88.5,
    attendance: 94,
    assignments: 12,
    rank: 4
  },
  grades: {
    monthly: [
      { subject: "Matematika", score: 85, month: "Agustus" },
      { subject: "Fisika", score: 78, month: "Agustus" },
      { subject: "Kimia", score: 90, month: "Agustus" },
      { subject: "Biologi", score: 88, month: "Agustus" },
    ],
    semester: [
      { subject: "Matematika", score: 88, grade: "A" },
      { subject: "Fisika", score: 82, grade: "B+" },
      { subject: "Bahasa Indonesia", score: 92, grade: "A" },
      { subject: "Bahasa Inggris", score: 85, grade: "A-" },
    ]
  },
  attendance: [
    { date: "2023-10-01", status: "Hadir" },
    { date: "2023-10-02", status: "Hadir" },
    { date: "2023-10-03", status: "Izin" },
    { date: "2023-10-04", status: "Hadir" },
  ],
  questions: [
    { id: 1, subject: "Matematika", title: "Turunan Fungsi Aljabar", difficulty: "Medium" },
    { id: 2, subject: "Fisika", title: "Hukum Newton II", difficulty: "Hard" },
    { id: 3, subject: "Biologi", title: "Sistem Respirasi", difficulty: "Easy" },
  ]
};
