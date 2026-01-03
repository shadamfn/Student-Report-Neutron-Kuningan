import { studentData } from './data.js';

// Initialize Icons
const initIcons = () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
};

// Render Functions
const renderDashboard = () => {
    return `
        <div class="stats-grid">
            <div class="card">
                <h3>IPK Semester</h3>
                <div class="value text-primary">${studentData.stats.gpa}</div>
                <p style="font-size: 0.8rem; color: var(--text-muted);">+2.1% dari semester lalu</p>
            </div>
             <div class="card">
                <h3>Kehadiran</h3>
                <div class="value text-success">${studentData.stats.attendance}%</div>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Sangat Baik</p>
            </div>
             <div class="card">
                <h3>Tugas Selesai</h3>
                <div class="value text-warning">${studentData.stats.assignments}</div>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Minggu ini</p>
            </div>
             <div class="card">
                <h3>Peringkat Kelas</h3>
                <div class="value">#${studentData.stats.rank}</div>
                 <p style="font-size: 0.8rem; color: var(--text-muted);">Dari 32 Siswa</p>
            </div>
        </div>

        <div class="card">
            <h2 class="section-title">Jadwal Hari Ini</h2>
            <div class="list-item">
                <div>
                    <strong>Matematika Wajib</strong>
                    <br><span style="font-size: 0.8rem; color: var(--text-muted);">07:30 - 09:00 • Pak Budi</span>
                </div>
                <span class="badge">Sedang Berlangsung</span>
            </div>
             <div class="list-item">
                <div>
                    <strong>Bahasa Inggris</strong>
                    <br><span style="font-size: 0.8rem; color: var(--text-muted);">09:15 - 10:45 • Ms. Sarah</span>
                </div>
                <span>Akan Datang</span>
            </div>
        </div>
    `;
};

const renderRapor = () => {
    const gradesHtml = studentData.grades.semester.map(g => `
        <div class="list-item">
            <span>${g.subject}</span>
            <strong>${g.grade} (${g.score})</strong>
        </div>
    `).join('');

    return `
        <h2 class="section-title">Nilai Semester Ganjil</h2>
        <div class="card">
            <div class="card-list">
                ${gradesHtml}
            </div>
        </div>
        <br>
        <h2 class="section-title">Nilai Evaluasi Bulanan (Agustus)</h2>
         <div class="card">
            <div class="card-list">
                 ${studentData.grades.monthly.map(g => `
                    <div class="list-item">
                        <span>${g.subject}</span>
                        <strong>${g.score}</strong>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

const renderBankSoal = () => {
    return `
        <h2 class="section-title">Bank Soal & Latihan</h2>
        <div class="card">
             ${studentData.questions.map(q => `
                <div class="list-item">
                    <div>
                        <strong>${q.title}</strong>
                        <br><span style="font-size: 0.8rem; color: var(--text-muted);">${q.subject}</span>
                    </div>
                    <button style="padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer;">
                        Latihan
                    </button>
                </div>
            `).join('')}
        </div>
    `;
};

const renderTrack = () => {
    return `
        <h2 class="section-title">Riwayat Presensi</h2>
        <div class="card">
             ${studentData.attendance.map(a => `
                <div class="list-item">
                    <span>${a.date}</span>
                    <span style="
                        padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;
                        background: ${a.status === 'Hadir' ? '#d1fae5' : '#fee2e2'};
                        color: ${a.status === 'Hadir' ? '#065f46' : '#991b1b'};
                    ">${a.status}</span>
                </div>
            `).join('')}
        </div>
    `;
};

// Router Logic
const contentArea = document.getElementById('content-area');
const navItems = document.querySelectorAll('.nav-item');

window.navigate = (page) => {
    // Update Active State
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`a[href="#${page}"]`).classList.add('active');

    // Render Content
    if (page === 'dashboard') contentArea.innerHTML = renderDashboard();
    else if (page === 'rapor') contentArea.innerHTML = renderRapor();
    else if (page === 'bank-soal') contentArea.innerHTML = renderBankSoal();
    else if (page === 'track') contentArea.innerHTML = renderTrack();

    // Re-init icons for new content
    initIcons();
};

// Initial Setup
const init = () => {
    // Set User Info
    document.getElementById('user-name').innerText = studentData.name.split(' ')[0];
    document.getElementById('user-class').innerText = studentData.class;
    document.getElementById('user-avatar').src = studentData.avatar;

    // Load initial page
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    window.navigate(hash);
};

// Mobile Toggle Logic
const mobileToggle = document.getElementById('mobile-toggle');
const sidebar = document.getElementById('sidebar');

mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        !sidebar.contains(e.target) &&
        !mobileToggle.contains(e.target) &&
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Start
init();
initIcons();

// Use global window object for onclick handlers in HTML
window.navigate = (page) => {
    // Original navigate logic...
    // Update Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`a[href="#${page}"]`).classList.add('active');

    // Render Content
    if (page === 'dashboard') contentArea.innerHTML = renderDashboard();
    else if (page === 'rapor') contentArea.innerHTML = renderRapor();
    else if (page === 'bank-soal') contentArea.innerHTML = renderBankSoal();
    else if (page === 'track') contentArea.innerHTML = renderTrack();

    // Create icons
    initIcons();

    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }
}; 
