// KanbanBoard.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const KanbanBoard = ({ data }) => {
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem('groupingOption') || 'status'
  );

  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
  }, [groupingOption]);

  const handleGroupingOptionChange = (option) => {
    setGroupingOption(option);
  };

  // Logic to group and sort data based on the selected option
  let groupedAndSortedData = [];
  switch (groupingOption) {
    case 'status':
      groupedAndSortedData = groupByStatus(data);
      break;
    case 'user':
      groupedAndSortedData = groupByUser(data);
      break;
    case 'priority':
      groupedAndSortedData = groupByPriority(data);
      break;
    default:
      groupedAndSortedData = data;
  }

  // Function to group data by status
  const groupByStatus = (data) => {
    // Implement grouping logic
    return data;
  };

  // Function to group data by user
  const groupByUser = (data) => {
    // Implement grouping logic
    return data;
  };

  // Function to group data by priority and sort by priority
  const groupByPriority = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const priorityGroup = `priority-${item.priority}`;
      if (!groupedData[priorityGroup]) {
        groupedData[priorityGroup] = [];
      }
      groupedData[priorityGroup].push(item);
    });

    // Sort each priority group
    for (const group in groupedData) {
      groupedData[group].sort((a, b) => b.priority - a.priority);
    }

    // Flatten the array
    const sortedData = Object.values(groupedData).flat();

    return sortedData;
  };

  // Render UI based on grouped and sorted data
  return (
    <div className="kanban-board">
      <div className="options">
        <button
          className={groupingOption === 'status' ? 'active' : ''}
          onClick={() => handleGroupingOptionChange('status')}
        >
          Group by Status
        </button>
        <button
          className={groupingOption === 'user' ? 'active' : ''}
          onClick={() => handleGroupingOptionChange('user')}
        >
          Group by User
        </button>
        <button
          className={groupingOption === 'priority' ? 'active' : ''}
          onClick={() => handleGroupingOptionChange('priority')}
        >
          Group by Priority
        </button>
      </div>

      {/* Render UI based on grouped and sorted data */}
      {groupedAndSortedData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default KanbanBoard;
