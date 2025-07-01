const ResumePreview = ({ data }) => {
  const { personalInfo, experience, education, skills, projects, certificates } = data;

  return (
    <div style={{
      backgroundColor: 'white',
      color: '#111827',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px', // reduced gap
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
              marginBottom: '4px'
            }}>
              {personalInfo.fullName}
            </h1>
            {personalInfo.summary && (
              <p style={{ color: '#374151', marginBottom: '8px' }}>{personalInfo.summary}</p> // reduced
            )}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '8px',
              gap: '12px',
              fontSize: '12px',
              color: '#374151'
            }}>
              {/* Contact Info Items */}
              {/* ... same as before */}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '4px' }}>
              {/* Social Icons */}
              {/* ... same as before */}
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
              <img 
                src={personalInfo.image} 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
            paddingBottom: '6px',
            marginBottom: '8px'
          }}>
            Experience
          </h3>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: '500' }}>{exp.position}</h4>
                  <div style={{ color: '#374151', fontSize: '12px' }}>
                    {exp.company} {exp.city && `, ${exp.city}`}
                  </div>
                </div>
                <div style={{ color: '#4b5563', fontSize: '14px', whiteSpace: 'nowrap' }}>
                  {exp.from} - {exp.currentlyWorking ? 'Present' : exp.to}
                </div>
              </div>
              {exp.description && (
                <p style={{ marginTop: '4px', fontSize: '14px', color: '#374151' }}>{exp.description}</p>
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
            paddingBottom: '6px',
            marginBottom: '8px'
          }}>
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: '500', fontSize: '16px' }}>
                    {edu.university} {edu.city && `, ${edu.city}`}
                  </h4>
                  <div style={{ color: '#374151', fontSize: '14px' }}>
                    {edu.degree} {edu.subject && `in ${edu.subject}`}
                  </div>
                </div>
                <div style={{ color: '#4b5563', fontSize: '14px', whiteSpace: 'nowrap' }}>
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
            paddingBottom: '6px',
            marginBottom: '8px'
          }}>
            Projects
          </h3>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h4 style={{ fontWeight: '500', fontSize: '16px' }}>{project.name}</h4>
              {project.description && (
                <p style={{
                  marginTop: '4px',
                  fontSize: '14px',
                  color: '#374151'
                }}>{project.description}</p>
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
            paddingBottom: '6px',
            marginBottom: '8px'
          }}>
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
                <div style={{ color: '#374151', fontSize: '14px' }}>
                  {cert.organization} • {cert.date}
                </div>
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
            paddingBottom: '6px',
            marginBottom: '8px'
          }}>
            Skills
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px'
          }}>
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
