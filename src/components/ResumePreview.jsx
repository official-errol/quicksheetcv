const ResumePreview = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates } = data;

  return (
    <div style={{
      backgroundColor: 'white',
      color: '#111827',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px', // reduced space between sections
      width: '210mm',
      height: '297mm',
      margin: '0 auto',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      {/* Personal Info */}
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '30px', fontWeight: '700', marginBottom: '4px' }}>
              {personalInfo.fullName}
            </h1>
            {personalInfo.summary && (
              <p style={{ color: '#374151', marginBottom: '8px' }}>{personalInfo.summary}</p>
            )}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '8px',
              gap: '12px',
              fontSize: '12px',
              color: '#374151'
            }}>
              {personalInfo.email && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8..." />
                  </svg>
                  {personalInfo.email}
                </div>
              )}
              {personalInfo.phone && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28..." />
                  </svg>
                  {personalInfo.phone}
                </div>
              )}
              {personalInfo.location && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9..." />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0..." />
                  </svg>
                  {personalInfo.location}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {Object.entries({
                website: personalInfo.website,
                linkedin: personalInfo.linkedin,
                github: personalInfo.github,
                facebook: personalInfo.facebook,
                twitter: personalInfo.twitter,
                instagram: personalInfo.instagram
              }).map(([platform, url]) => {
                if (!url) return null;
                const iconMap = {
                  website: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 17h-2v-2h2v2zm0-4h-2v-5h2v5zm0-7h-2V6h2v2z", // globe icon
                  linkedin: "M19 3a2 2 0 0 1 2 2v14a2...",
                  github: "M12 2A10 10 0 0 0 2 12c0 4.42...",
                  facebook: "M22 12c0-5.52-4.48-10-10-10S2...",
                  twitter: "M22.46 6c-.77.35-1.6.58-2.46...",
                  instagram: "M7.8 2h8.4C19.4 2 22 4.6 22..."
                };
                return (
                  <div key={platform} style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} viewBox="0 0 24 24" fill="currentColor">
                      <path d={iconMap[platform]} />
                    </svg>
                    <span style={{ fontSize: '12px' }}>{url}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {personalInfo.image && (
            <div style={{
              width: '100px',
              height: '100px',
              overflow: 'hidden',
              marginLeft: '16px',
              flexShrink: 0
            }}>
              <img src={personalInfo.image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
        </div>
      </div>

      {/* Experience */}
      {experience.length > 0 && experience[0].position && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '6px', marginBottom: '8px' }}>
            Experience
          </h3>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: '500' }}>{exp.position}</h4>
                  <div style={{ fontSize: '12px', color: '#374151' }}>{exp.company} {exp.city && `, ${exp.city}`}</div>
                </div>
                <div style={{ fontSize: '12px', color: '#4b5563', whiteSpace: 'nowrap' }}>
                  {exp.from} - {exp.currentlyWorking ? 'Present' : exp.to}
                </div>
              </div>
              {exp.description && (
                <p style={{ marginTop: '4px', fontSize: '13px', color: '#374151' }}>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education[0].university && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '6px', marginBottom: '8px' }}>
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: '500', fontSize: '16px' }}>{edu.university} {edu.city && `, ${edu.city}`}</h4>
                  <div style={{ fontSize: '14px', color: '#374151' }}>
                    {edu.degree} {edu.subject && `in ${edu.subject}`}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: '#4b5563', whiteSpace: 'nowrap' }}>
                  {edu.from} - {edu.currentlyStudying ? 'Present' : edu.to}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && projects[0].name && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '6px', marginBottom: '8px' }}>
            Projects
          </h3>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h4 style={{ fontWeight: '500', fontSize: '16px' }}>{project.name}</h4>
              {project.description && (
                <p style={{ marginTop: '4px', fontSize: '13px', color: '#374151' }}>{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certificates */}
      {certificates.length > 0 && certificates[0].name && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '6px', marginBottom: '8px' }}>
            Certificates
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px'
          }}>
            {certificates.map((cert, index) => (
              <div key={index} style={{ marginBottom: '8px', breakInside: 'avoid' }}>
                <h4 style={{ fontWeight: '500', fontSize: '16px' }}>{cert.name}</h4>
                <div style={{ fontSize: '13px', color: '#374151' }}>
                  {cert.organization} • {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && skills[0] && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', borderBottom: '1px solid #d1d5db', paddingBottom: '6px', marginBottom: '8px' }}>
            Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.map((skill, index) => (
              <span key={index} style={{
                padding: '4px 10px',
                backgroundColor: '#e5e7eb',
                borderRadius: '9999px',
                fontSize: '12px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
