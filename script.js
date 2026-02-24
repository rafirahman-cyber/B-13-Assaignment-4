let jobs = [
            { id: 1, company: 'Mobile First Corp', title: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$130,000 - $175,000', status: 'NOT APPLIED', description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.' },
            { id: 2, company: 'WebFlow Agency', title: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80,000 - $120,000', status: 'NOT APPLIED', description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.' },
            { id: 3, company: 'DataViz Solutions', title: 'Data Visualization Specialist', location: 'Boston, MA', type: 'Full-time', salary: '$125,000 - $165,000', status: 'NOT APPLIED', description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.' },
            { id: 4, company: 'CloudFirst Inc', title: 'Backend Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$140,000 - $190,000', status: 'NOT APPLIED', description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.' },
            { id: 5, company: 'Innovation Labs', title: 'UI/UX Engineer', location: 'Austin, TX', type: 'Full-time', salary: '$110,000 - $150,000', status: 'NOT APPLIED', description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.' },
            { id: 6, company: 'MegaCorp Solutions', title: 'JavaScript Developer', location: 'New York, NY', type: 'Full-time', salary: '$130,000 - $170,000', status: 'NOT APPLIED', description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.' },
            { id: 7, company: 'StartupXYZ', title: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: '$120,000 - $160,000', status: 'NOT APPLIED', description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.' },
            { id: 8, company: 'TechCorp Industries', title: 'Senior Frontend Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$130,000 - $175,000', status: 'NOT APPLIED', description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.' }
        ];

        let currentFilter = 'All';

        function setFilter(filter) {
            currentFilter = filter;
            
            // Update button styles
            const buttons = ['All', 'Interview', 'Rejected'];
            buttons.forEach(btn => {
                const el = document.getElementById(`btn-${btn.toLowerCase()}`);
                if (btn === filter) {
                    el.className = "px-6 py-1.5 text-sm font-medium rounded bg-blue-500 text-white transition-colors";
                } else {
                    el.className = "px-6 py-1.5 text-sm font-medium rounded bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors";
                }
            });

            renderJobs();
        }

        function updateStatus(id, newStatus) {
            const jobIndex = jobs.findIndex(j => j.id === id);
            if (jobIndex > -1) {
                jobs[jobIndex].status = newStatus;
                renderJobs();
            }
        }

        function deleteJob(id) {
            jobs = jobs.filter(j => j.id !== id);
            renderJobs();
        }

        function renderJobs() {
            const listContainer = document.getElementById('job-list');
            listContainer.innerHTML = '';

            // Update Header Section (Overall jobs counts)
            document.getElementById('total-count').innerText = jobs.length;
            document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'INTERVIEW').length;
            document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'REJECTED').length;


             // Filter jobs for display
            let filteredJobs = jobs;
            if (currentFilter !== 'All') {
                filteredJobs = jobs.filter(j => j.status === currentFilter.toUpperCase());
            }

            document.getElementById('showing-count').innerText = `${filteredJobs.length} jobs`;


             // Empty Status
            if (filteredJobs.length === 0) {
                listContainer.innerHTML = `
                    <div class="bg-white rounded-lg p-16 flex flex-col items-center justify-center text-center shadow-sm border border-slate-100 mt-4">
                        <h3 class="text-lg font-bold text-slate-800 mb-1">No jobs available</h3>
                        <p class="text-sm text-slate-500">Check back soon for new job opportunities</p>
                    </div>
                `;
                return;
            }


            // Render Job Cards
            filteredJobs.forEach(job => {
                let badgeClass = "bg-slate-100 text-slate-600";
                if(job.status === 'INTERVIEW') badgeClass = "bg-green-100 text-green-700";
                if(job.status === 'REJECTED') badgeClass = "bg-red-100 text-red-700";

                const cardHTML = `
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-slate-100 relative group transition hover:shadow-md">
                        
                        <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-slate-300 hover:text-red-500 transition">
                        </button>

                        <h3 class="text-lg font-bold text-slate-900">${job.company}</h3>
                        <p class="text-slate-500 text-sm mb-3">${job.title}</p>


                        <div class="flex items-center text-xs text-slate-400 mb-4 space-x-2">
                            <span>${job.location}</span>
                            <span>${job.type}</span>
                            <span>${job.salary}</span>
                        </div>

                        <div class="mb-4">
                            <span class="${badgeClass} text-[10px] font-bold px-2 py-1 rounded tracking-wide uppercase">
                                ${job.status}
                            </span>
                        </div>

                        <p class="text-sm text-slate-600 mb-5 leading-relaxed">
                            ${job.description}
                        </p>

                         <div class="flex space-x-3">
                            <button onclick="updateStatus(${job.id}, 'INTERVIEW')" class="px-4 py-1.5 text-xs font-bold rounded border ${job.status === 'INTERVIEW' ? 'bg-green-500 text-white border-green-500' : 'border-green-400 text-green-500 hover:bg-green-50'} transition">
                                INTERVIEW
                            </button>
                            <button onclick="updateStatus(${job.id}, 'REJECTED')" class="px-4 py-1.5 text-xs font-bold rounded border ${job.status === 'REJECTED' ? 'bg-red-500 text-white border-red-500' : 'border-red-400 text-red-500 hover:bg-red-50'} transition">
                                REJECTED
                            </button>
                        </div>
                    </div>
                `;
                listContainer.insertAdjacentHTML('beforeend', cardHTML);
            });

        }

        renderJobs();
            
        



      


        
        

       