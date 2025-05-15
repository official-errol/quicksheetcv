import { useState } from 'react';

const Handlers = (data, onChange) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const mainTabs = [
    {
      id: 'personal',
      label: 'Personal',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      )
    },
    {
      id: 'education',
      label: 'Education',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      )
    },
    {
      id: 'certificates',
      label: 'Certificates',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    }
  ];

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [name]: value,
      },
    });
  };

  const handleImageChange = (file, callback) => {
    const reader = new FileReader();
    reader.onload = () => {
      onChange({
        ...data,
        personalInfo: {
          ...data.personalInfo,
          image: reader.result,
        },
      });
      if (callback) callback();
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (callback) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        image: null,
      },
    });
    if (callback) callback();
  };

  const handleExperienceChange = (id, e) => {
    const { name, value } = e.target;
    const updatedExperience = data.experience.map((exp) =>
      exp.id === id ? { ...exp, [name]: value } : exp
    );
    onChange({ ...data, experience: updatedExperience });
  };

  const addExperience = () => {
    const newId = Math.max(...data.experience.map((exp) => exp.id), 0) + 1;
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: newId,
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
          description: '',
        },
      ],
    });
  };

  const removeExperience = (id) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    const updatedEducation = data.education.map((edu) =>
      edu.id === id ? { ...edu, [name]: value } : edu
    );
    onChange({ ...data, education: updatedEducation });
  };

  const addEducation = () => {
    const newId = Math.max(...data.education.map((edu) => edu.id), 0) + 1;
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: newId,
          university: '',
          degree: '',
          subject: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    });
  };

  const removeEducation = (id) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const handleSkillChange = (index, e) => {
    const newSkills = [...data.skills];
    newSkills[index] = e.target.value;
    onChange({ ...data, skills: newSkills });
  };

  const addSkill = (skill = '') => {
    onChange({
      ...data,
      skills: [...data.skills, skill],
    });
  };

  const removeSkill = (index) => {
    const newSkills = [...data.skills];
    newSkills.splice(index, 1);
    onChange({ ...data, skills: newSkills });
  };

  const handleProjectChange = (id, e) => {
    const { name, value } = e.target;
    const updatedProjects = data.projects.map((project) =>
      project.id === id ? { ...project, [name]: value } : project
    );
    onChange({ ...data, projects: updatedProjects });
  };

  const addProject = () => {
    const newId = Math.max(...data.projects.map((p) => p.id), 0) + 1;
    onChange({
      ...data,
      projects: [
        ...data.projects,
        {
          id: newId,
          name: '',
          description: '',
        },
      ],
    });
  };

  const removeProject = (id) => {
    onChange({
      ...data,
      projects: data.projects.filter((project) => project.id !== id),
    });
  };

  const handleCertificateChange = (id, e) => {
    const { name, value } = e.target;
    const updatedCertificates = data.certificates.map((cert) =>
      cert.id === id ? { ...cert, [name]: value } : cert
    );
    onChange({ ...data, certificates: updatedCertificates });
  };

  const addCertificate = () => {
    const newId = Math.max(...data.certificates.map((c) => c.id), 0) + 1;
    onChange({
      ...data,
      certificates: [
        ...data.certificates,
        {
          id: newId,
          name: '',
          organization: '',
          date: '',
        },
      ],
    });
  };

  const removeCertificate = (id) => {
    onChange({
      ...data,
      certificates: data.certificates.filter((cert) => cert.id !== id),
    });
  };

  return {
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
  };
}

export default Handlers