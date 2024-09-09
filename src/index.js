import './styles.scss';
import { increment, decrement } from './counter';

const fetchBuildTools = async () => {
  try {
    const response = await fetch('./tools.json');
    const tools = await response.json();

    const toolsList = document.createElement('ul');
    toolsList.className = 'tools-list';

    tools.forEach(tool => {
      const toolItem = document.createElement('li');
      toolItem.innerHTML = `<strong>${tool.name}:</strong> ${tool.description}`;
      toolsList.appendChild(toolItem);
    });

   
    const buildToolsContainer = document.getElementById('build-tools');
    buildToolsContainer.appendChild(toolsList);

  } catch (error) {
    console.error('Error fetching build tools:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('count');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');

  const updateCounterDisplay = (count) => {
    countElement.textContent = count;
    decrementButton.disabled = count <= 0; 
  };

  incrementButton.addEventListener('click', () => {
    const count = increment(parseInt(countElement.textContent));
    updateCounterDisplay(count);
  });

  decrementButton.addEventListener('click', () => {
    const currentCount = parseInt(countElement.textContent);
    if (currentCount > 0) {
      const count = decrement(currentCount);
      updateCounterDisplay(count);
    }
  });

  updateCounterDisplay(0);
  fetchBuildTools();
});
