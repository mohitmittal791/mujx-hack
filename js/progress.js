// Sample data for demonstration
const learningMaterial = [
    {
      title: "Module 1: Introduction to Adaptive Learning",
      description: "Learn the basics of adaptive learning and its benefits for neurodiverse students.",
      completed: false
    },
    {
      title: "Module 2: Personalized Learning Paths",
      description: "Discover how adaptive learning can create tailored learning experiences.",
      completed: false
    },
    // ... more modules
  ];
  
  const progressContainer = document.querySelector('.progress-container');
  const progressBar = progressContainer.querySelector('.progress-bar');
  const progressValue = progressContainer.querySelector('.progress-value');
  const milestoneMarkers = progressContainer.querySelector('.milestone-markers');
  const moduleList = document.querySelector('.module-list');
  
  // Function to update the progress bar and value
  function updateProgress(completedModules) {
    const totalModules = learningMaterial.length;
    const percentage = (completedModules / totalModules) * 100;
    progressBar.style.width = percentage + '%';
    progressValue.textContent = percentage.toFixed(0) + '%';
  }
  
  // Function to create module elements
  function createModuleElements() {
    learningMaterial.forEach((module, index) => {
      const moduleElement = document.createElement('div');
      moduleElement.classList.add('module');
      moduleElement.classList.add(module.completed ? 'completed' : 'in-progress');
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = module.title;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = module.description;
  
      moduleElement.appendChild(titleElement);
      moduleElement.appendChild(descriptionElement);
  
      moduleList.appendChild(moduleElement);
    });
  }
  
  // Function to add milestone markers
  function addMilestoneMarkers() {
    const milestoneInterval = learningMaterial.length / 3;
    for (let i = 0; i <= learningMaterial.length; i += milestoneInterval) {
      const milestoneElement = document.createElement('div');
      milestoneElement.classList.add('milestone');
      milestoneElement.textContent = `Milestone ${i + 1}`;
      milestoneMarkers.appendChild(milestoneElement);
    }
  }
  
  // Initial setup
  createModuleElements();
  addMilestoneMarkers();
  updateProgress(0); // Initially, assume no modules are completed
  
  // Sample event listener to simulate module completion
  document.querySelector('.module').addEventListener('click', () => {
    // Update module completion status and progress
    learningMaterial[0].completed = true;
    updateProgress(learningMaterial.filter(module => module.completed).length);
  });