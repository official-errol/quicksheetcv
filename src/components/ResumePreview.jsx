const ResumePreview = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates } = data;

  return (
    <div style={{
      backgroundColor: 'white',
      color: '#111827',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '210mm',
      height: '297mm',
      margin: '0 auto',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      {/* Personal Info Section */}
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: '30px',
              fontWeight: '700',
              marginBottom: '4px',
              fontFamily: '"Times New Roman", Times, serif'
            }}>
              {personalInfo.fullName}
            </h1>
            
            {personalInfo.summary && (
              <p style={{
                color: '#374151',
                marginBottom: '12px',
                fontFamily: '"Times New Roman", Times, serif'
              }}>{personalInfo.summary}</p>
            )}

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '12px',
              gap: '12px',
              fontSize: '12px',
              color: '#374151',
              fontFamily: '"Times New Roman", Times, serif'
            }}>
              {personalInfo.email && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  {personalInfo.email}
                </div>
              )}
              {personalInfo.phone && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  {personalInfo.phone}
                </div>
              )}
              {personalInfo.location && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {personalInfo.location}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
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
                  website: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
                  linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
                  github: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.07.63-1.31-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z',
                  facebook: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z',
                  twitter: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
                  instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
                };

                return (
                  <div key={platform} style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} viewBox="0 0 24 24" fill="currentColor">
                      <path d={iconMap[platform]} />
                    </svg>
                    <span style={{
                      fontSize: '12px',
                      fontFamily: '"Times New Roman", Times, serif'
                    }}>
                      {url}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {personalInfo.image && (
            <div style={{
              width: '120px',
              height: '120px',
              overflow: 'hidden',
              marginLeft: '20px',
              flexShrink: 0
            }}>
              <img 
                src={personalInfo.image} 
                alt="Profile" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Experience Section */}
      {experience.length > 0 && experience[0].position && (
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '8px',
            marginBottom: '12px',
            fontFamily: '"Times New Roman", Times, serif'
          }}>
            Experience
          </h3>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <h4 style={{ fontWeight: '500', fontFamily: '"Times New Roman", Times, serif' }}>{exp.position}</h4>
                  <div style={{ color: '#374151', fontSize: '12px', fontFamily: '"Times New Roman", Times, serif' }}>
                    {exp.company} {exp.city && `, ${exp.city}`}
                  </div>
                </div>
                <div style={{ color: '#4b5563', fontSize: '14px', whiteSpace: 'nowrap', fontFamily: '"Times New Roman", Times, serif' }}>
                  {exp.from} - {exp.currentlyWorking ? 'Present' : exp.to}
                </div>
              </div>
              {exp.description && (
                <p style={{ marginTop: '6px', fontSize: '14px', color: '#374151', fontFamily: '"Times New Roman", Times, serif' }}>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && education[0].university && (
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '8px',
            marginBottom: '12px',
            fontFamily: '"Times New Roman", Times, serif'
          }}>
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontWeight: '500', fontSize: '16px', fontFamily: '"Times New Roman", Times, serif' }}>
                    {edu.university} {edu.city && `, ${edu.city}`}
                  </h4>
                  <div style={{ color: '#374151', fontSize: '14px', fontFamily: '"Times New Roman", Times, serif' }}>
                    {edu.degree} {edu.subject && `in ${edu.subject}`}
                  </div>
                </div>
                <div style={{ color: '#4b5563', fontSize: '14px', whiteSpace: 'nowrap', fontFamily: '"Times New Roman", Times, serif' }}>
                  {edu.from} - {edu.currentlyStudying ? 'Present' : edu.to}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects Section */}
      {projects.length > 0 && projects[0].name && (
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '8px',
            marginBottom: '12px',
            fontFamily: '"Times New Roman", Times, serif'
          }}>
            Projects
          </h3>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h4 style={{ fontWeight: '500', fontSize: '16px', fontFamily: '"Times New Roman", Times, serif' }}>{project.name}</h4>
              {project.description && (
                <p style={{ marginTop: '4px', fontSize: '14px', color: '#374151', fontFamily: '"Times New Roman", Times, serif' }}>{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certificates Section */}
      {certificates.length > 0 && certificates[0].name && (
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '8px',
            marginBottom: '12px',
            fontFamily: '"Times New Roman", Times, serif'
          }}>
            Certificates
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {certificates.map((cert, index) => (
              <div key={index} style={{ marginBottom: '10px', breakInside: 'avoid' }}>
                <h4 style={{ fontWeight: '500', fontSize: '16px', fontFamily: '"Times New Roman", Times, serif' }}>{cert.name}</h4>
                <div style={{ color: '#374151', fontSize: '14px', fontFamily: '"Times New Roman", Times, serif' }}>
                  {cert.organization} • {cert.date}
                </div>
                {cert.description && (
                  <p style={{ marginTop: '4px', fontSize: '13px', color: '#4b5563', fontFamily: '"Times New Roman", Times, serif' }}>
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && skills[0] && (
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '8px',
            marginBottom: '12px',
            fontFamily: '"Times New Roman", Times, serif'
          }}>
            Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '4px 10px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontFamily: '"Times New Roman", Times, serif'
                }}
              >
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
