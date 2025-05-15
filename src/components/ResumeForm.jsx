import { useState, useEffect, useRef } from 'react'
import Section from './Section'
import Handlers from '../utils/Handlers';

const ResumeForm = ({ data, onChange }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    calculateCompletion()
  }, [data])

  const calculateCompletion = () => {
    let completedFields = 0
    let totalFields = 0

    if (data.personalInfo.fullName) completedFields++
    if (data.personalInfo.email) completedFields++
    if (data.personalInfo.phone) completedFields++
    if (data.personalInfo.location) completedFields++
    if (data.personalInfo.summary) completedFields++
    totalFields += 5

    data.experience.forEach(exp => {
      if (exp.position) completedFields++
      if (exp.company) completedFields++
      if (exp.from) completedFields++
      if (exp.to || exp.currentlyWorking) completedFields++
      totalFields += 4
    })

    data.education.forEach(edu => {
      if (edu.university) completedFields++
      if (edu.degree) completedFields++
      if (edu.from) completedFields++
      if (edu.to || edu.currentlyStudying) completedFields++
      totalFields += 4
    })

    data.skills.forEach(skill => {
      if (skill.trim()) completedFields++
    })
    totalFields += Math.max(3, data.skills.length)

    data.projects.forEach(project => {
      if (project.name) completedFields++
      totalFields += 1
    })

    data.certificates.forEach(cert => {
      if (cert.name) completedFields++
      totalFields += 1
    })

    const percentage = Math.round((completedFields / totalFields) * 100)
    setCompletionPercentage(percentage)
  }

  const {
    handleImageChange,
    removeImage,
    showDropdown,
    setShowDropdown,
    mainTabs,
    handlePersonalChange,
    handleExperienceChange,
    addExperience,
    removeExperience,
    handleEducationChange,
    addEducation,
    removeEducation,
    handleSkillChange,
    addSkill,
    removeSkill,
    handleProjectChange,
    addProject,
    removeProject,
    handleCertificateChange,
    addCertificate,
    removeCertificate,
  } = Handlers(data, onChange);

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="text-zinc-100 bg-zinc-700/30 backdrop-blur-md rounded-2xl border border-zinc-700">

      <div className="flex text-xs relative">
        <div className="flex flex-col w-full">
          <div className="hidden md:flex">
            {mainTabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`flex-1 text-left p-4 text-sm md:text-sm ${
                  activeTab === tab.id
                    ? 'font-medium text-blue-500'
                    : 'text-zinc-100 bg-zinc-700'
                } ${
                  index === 0 ? 'rounded-tl-2xl' : ''
                } ${
                  index === mainTabs.length - 1 ? 'rounded-tr-2xl' : ''
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowDropdown(false);
                }}
              >
                <div className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </div>
              </button>
            ))}
          </div>

          <div className="md:hidden relative">
            <button
              className="w-full px-4 py-3 bg-zinc-700 text-zinc-100 rounded-t-2xl text-sm flex justify-between items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="flex items-center gap-2">
                {mainTabs.find(tab => tab.id === activeTab)?.icon || null}
                <span>{mainTabs.find(tab => tab.id === activeTab)?.label || 'Select'}</span>
              </div>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showDropdown && (
              <div className="absolute z-10 w-full bg-zinc-800 rounded-b-2xl shadow-lg">
                {mainTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`w-full text-left px-4 py-3 text-sm ${
                      activeTab === tab.id
                        ? 'font-medium text-blue-500 bg-zinc-700'
                        : 'text-zinc-100 hover:bg-zinc-700'
                    }`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setShowDropdown(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {tab.icon}
                      {tab.label}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Completion Bar 
      <div className="w-full bg-zinc-700 h-6">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        ><span className="text-xs text-zinc-300">
          {completionPercentage}%
        </span></div>
      </div> */}

      {activeTab === 'personal' && (
        <Section title="Personal Information" isOpen={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder='John Doe'
                  value={data.personalInfo.fullName}
                  onChange={handlePersonalChange}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder='john.doe@example.com'
                  value={data.personalInfo.email}
                  onChange={handlePersonalChange}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <div className="group">
                  <span className={`group-has-[div]:hidden flex shrink-0 justify-center items-center size-20 border-2 border-dotted border-gray-300 text-gray-400 cursor-pointer hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-600 dark:hover:bg-neutral-700/50 ${data.personalInfo.image ? 'hidden' : ''}`}>
                    <svg className="shrink-0 size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="10" r="3"></circle>
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                    </svg>
                  </span>
                  
                  {data.personalInfo.image && (
                    <div className="size-20">
                      <img 
                        src={data.personalInfo.image} 
                        className="w-full h-full object-cover" 
                        alt="Profile" 
                      />
                    </div>
                  )}
                </div>

                <div className="grow">
                  <div className="flex items-center gap-x-2">
                    <label className="py-3 px-6 inline-flex items-center gap-x-2 text-xs font-medium rounded-4xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                      </svg>
                      Upload photo
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleImageChange(e.target.files[0], resetFileInput);
                          }
                        }}
                      />
                    </label>
                    
                    {data.personalInfo.image && (
                      <button onClick={() => removeImage(resetFileInput)}
                      className='bg-red-500 p-3 rounded-3xl hover:bg-red-600'>
                        <svg className='w-4 h-4' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <title>delete [#ffffff]</title>
                            <defs></defs>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffffff">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-zinc-400 mt-3">
                Recommended: Square image, max 2MB
              </p>
            </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder='(123) 456-7890'
                  value={data.personalInfo.phone}
                  onChange={handlePersonalChange}
                />
              </div>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder='City, Country'
                  value={data.personalInfo.location}
                  onChange={handlePersonalChange}
                />
              </div>
              <div className="md:col-span-2">
                <label>Summary</label>
                <textarea
                  name="summary"
                  placeholder='Write a brief summary about yourself'
                  value={data.personalInfo.summary}
                  onChange={handlePersonalChange}
                  rows="4"
                />
              </div>
              <div className="md:col-span-2">
                <label>Social Media</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                  {['website', 'linkedin', 'github', 'facebook', 'twitter', 'instagram'].map((platform) => {
                    const iconMap = {
                      website: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
                      linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
                      github: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.07.63-1.31-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z',
                      facebook: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z',
                      twitter: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
                      instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
                    };
                    
                    return (
                      <div key={platform} className="flex-1 min-w-[120px]">
                        <div className="flex items-center gap-2 p-2 bg-zinc-700 rounded-3xl">
                          <svg
                            className="w-5 h-5 shrink-0"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d={iconMap[platform]} />
                          </svg>
                          <input
                            type="url"
                            name={platform}
                            placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                            value={data.personalInfo[platform]}
                            onChange={handlePersonalChange}
                            className="bg-transparent text-sm w-full focus:outline-none"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
        </Section>
      )}

      {activeTab === 'experience' && (
        <Section title="Experience" isOpen={true}>
          {data.experience.map((exp) => (
            <div key={exp.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
                <div>
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    placeholder='Software Engineer'
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(exp.id, e)}
                  />
                </div>
                <div>
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder='Tech Company'
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(exp.id, e)}
                  />
                </div>
                <div>
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder='City'
                    value={exp.city}
                    onChange={(e) => handleExperienceChange(exp.id, e)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label>Start Date</label>
                    <input
                      type="date"
                      name="from"
                      placeholder='YYYY-MM-DD'
                      value={exp.from}
                      onChange={(e) => handleExperienceChange(exp.id, e)}
                    />
                  </div>
                  <div>
                    <label>End Date</label>
                    {exp.currentlyWorking ? (
                      <div className="relative">
                        <input
                          type="text"
                          value="Present"
                          readOnly
                        />
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-100 bg-zinc-800 rounded-3xl mt-2 border border-zinc-700 pointer-events-none">
                        Present
                      </div>
                    </div>
                    ) : (
                      <input
                        type="date"
                        name="to"
                        placeholder='YYYY-MM-DD'
                        value={exp.to}
                        onChange={(e) => handleExperienceChange(exp.id, e)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id={`currently-working-${exp.id}`}
                  name="currentlyWorking"
                  checked={exp.currentlyWorking}
                  onChange={(e) => {
                    handleExperienceChange(exp.id, {
                      target: {
                        name: 'currentlyWorking',
                        value: e.target.checked,
                      },
                    })
                  }}
                />
                <label htmlFor={`currently-working-${exp.id}`}>
                  Currently working here
                </label>
              </div>
              <div className="mb-4">
                <label>Job Description</label>
                <textarea
                  name="description"
                  placeholder='Describe your responsibilities and achievements'
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(exp.id, e)}
                  rows="3"
                />
              </div>
              <button onClick={() => removeExperience(exp.id)}
              className='bg-red-500 p-3 rounded-3xl'>
                <svg className='w-4 h-4' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>delete [#ffffff]</title>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ))}
          <button onClick={addExperience} className='bg-blue-500 text-zinc-900 px-6 py-2 mt-4 text-sm rounded-3xl font-medium'>
            Add Experience
          </button>
        </Section>
      )}

      {activeTab === 'education' && (
        <Section title="Education" isOpen={true}>
          {data.education.map((edu) => (
            <div key={edu.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
                <div>
                  <label>School/University</label>
                  <input
                    type="text"
                    name="university"
                    placeholder='University of XYZ'
                    value={edu.university}
                    onChange={(e) => handleEducationChange(edu.id, e)}
                  />
                </div>
                <div>
                  <label>Degree Program</label>
                  <input
                    type="text"
                    name="degree"
                    placeholder='Bachelor of Science'
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(edu.id, e)}
                  />
                </div>
                <div>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder='Computer Science'
                    value={edu.subject}
                    onChange={(e) => handleEducationChange(edu.id, e)}
                  />
                </div>
                <div>
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder='City'
                    value={edu.city}
                    onChange={(e) => handleEducationChange(edu.id, e)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label>Start Year</label>
                    <input
                      type="text"
                      name="from"
                      placeholder='YYYY'
                      value={edu.from}
                      onChange={(e) => handleEducationChange(edu.id, e)}
                      pattern="\d{4}"
                      maxLength="4"
                      inputMode="numeric"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label>End Year</label>
                    {edu.currentlyStudying ? (
                      <div className="relative">
                        <input
                          type="text"
                          value="Present"
                          readOnly
                        />
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-100 bg-zinc-800 rounded-3xl mt-2 border border-zinc-700 pointer-events-none">
                        Present
                      </div>
                    </div>
                    ) : (
                      <input
                        type="text"
                        name="to"
                        value={edu.to}
                        onChange={(e) => handleEducationChange(edu.id, e)}
                        pattern="\d{4}"
                        maxLength="4"
                        inputMode="numeric"
                        className="w-full"
                        placeholder='YYYY'
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id={`currently-studying-${edu.id}`}
                  name="currentlyStudying"
                  checked={edu.currentlyStudying}
                  onChange={(e) => {
                    handleEducationChange(edu.id, {
                      target: {
                        name: 'currentlyStudying',
                        value: e.target.checked,
                      },
                    })
                  }}
                />
                <label htmlFor={`currently-studying-${edu.id}`}>
                  Currently studying here
                </label>
              </div>
              <button onClick={() => removeEducation(edu.id)}
              className='bg-red-500 p-3 rounded-3xl'>
                <svg className='w-4 h-4' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>delete [#ffffff]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ))}
          <button onClick={addEducation} className='bg-blue-500 text-zinc-900 px-6 py-2 mt-4 text-sm rounded-3xl font-medium'>
            Add Education
          </button>
        </Section>
      )}

      {activeTab === 'skills' && (
        <Section title="Skills" isOpen={true}>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'REST API', 'Figma', 'UI/UX'].map((skill) => (
                <button
                  key={skill}
                  onClick={() => {
                    const skillIndex = data.skills.indexOf(skill);
                    if (skillIndex === -1) {
                      const emptyIndex = data.skills.findIndex(s => s.trim() === '');
                      if (emptyIndex >= 0) {
                        handleSkillChange(emptyIndex, { target: { value: skill } });
                      } else {
                        addSkill(skill);
                      }
                    } else {
                      removeSkill(skillIndex);
                    }
                  }}
                  className={`px-6 py-2 rounded-3xl ${
                    data.skills.includes(skill)
                      ? 'bg-blue-500 text-white'
                      : 'bg-zinc-700 hover:bg-zinc-300 hover:text-zinc-900'
                  }`}
                >
                  {skill}
                  {data.skills.includes(skill) && (
                    <span className='ml-2'>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {data.skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={skill}
                placeholder='Skill'
                onChange={(e) => handleSkillChange(index, e)}
              />
              <button onClick={() => removeSkill(index)}
              className='bg-red-500 p-3 ml-4 rounded-3xl'>
                <svg className='w-4 h-4' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>delete [#ffffff]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ))}
          
          <button onClick={() => addSkill('')} className='bg-blue-500 text-zinc-900 px-6 py-2 mt-4 text-sm rounded-3xl font-medium'>
            Add Skill
          </button>
        </Section>
      )}

      {activeTab === 'projects' && (
        <Section title="Projects" isOpen={true}>
          {data.projects.map((project) => (
            <div key={project.id}>
              <div className="mb-4 mt-4">
                <label>Project Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Project Title'
                  value={project.name}
                  onChange={(e) => handleProjectChange(project.id, e)}
                />
              </div>
              <div className="mb-4">
                <label>Project Description</label>
                <textarea
                  name="description"
                  placeholder='Describe your project'
                  value={project.description}
                  onChange={(e) => handleProjectChange(project.id, e)}
                  rows="3"
                />
              </div>
              <button onClick={() => removeProject(project.id)}
              className='bg-red-500 p-3 rounded-3xl'>
                <svg className='w-4 h-4' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>delete [#ffffff]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ))}
          <button onClick={addProject} className='bg-blue-500 text-zinc-900 px-6 py-2 mt-4 text-sm rounded-3xl font-medium'>
            Add Project
          </button>
        </Section>
      )}

      {activeTab === 'certificates' && (
        <Section title="Certificates" isOpen={true}>
          {data.certificates.map((cert) => (
            <div key={cert.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
                <div>
                  <label>Certificate Name</label>
                  <input
                    type="text"
                    name="name"
                    value={cert.name}
                    onChange={(e) => handleCertificateChange(cert.id, e)}
                    placeholder='Certificate Name'
                  />
                </div>
                <div>
                  <label>Issuing Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={cert.organization}
                    onChange={(e) => handleCertificateChange(cert.id, e)}
                    placeholder='Issuing Organization'
                  />
                </div>
                <div>
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={cert.date}
                    onChange={(e) => handleCertificateChange(cert.id, e)}
                    placeholder='YYYY-MM-DD'
                  />
                </div>
              </div>
              <button onClick={() => removeCertificate(cert.id)}
              className='bg-red-500 p-3 rounded-3xl'>
                <svg className='w-4 h-4' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>delete [#ffffff]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#ffffff]"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ))}
          <button onClick={addCertificate} className='bg-blue-500 text-zinc-900 px-6 py-2 mt-4 text-sm rounded-3xl font-medium'>
            Add Certificate
          </button>
        </Section>
      )}
    </div>
  )
}

export default ResumeForm