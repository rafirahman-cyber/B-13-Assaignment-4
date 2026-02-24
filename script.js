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
        



      


        
        

       