import React, { useState } from 'react';
import './JournalEntry.css';


const MoodTracker = () => {
  const [moods, setMoods] = useState([]);
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const [journalEntry, setJournalEntry] = useState('');
  const [journalHeading, setJournalHeading] = useState('');
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedEntry, setSelectedEntry] = useState(null);

  const addMood = (mood) => {
    setMoods([...moods, { id: Date.now(), date: new Date().toLocaleDateString(), mood }]);
  };

  const deleteMood = (id) => {
    setMoods(moods.filter((mood) => mood.id !== id));
  };

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoText, date: todoDate }]);
      setTodoText('');
      setTodoDate('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addJournalEntry = () => {
    if (journalHeading.trim() !== '' && journalEntry.trim() !== '') {
      setJournalEntries([...journalEntries, { id: Date.now(), date: selectedDate, heading: journalHeading, entry: journalEntry }]);
      setJournalEntry('');
      setJournalHeading('');
    }
  };

  const deleteJournalEntry = (id) => {
    setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
    setSelectedEntry(null); // Clear selected entry if deleted
  };

  const editJournalEntry = (id) => {
    const entryToEdit = journalEntries.find((entry) => entry.id === id);
    setSelectedEntry(entryToEdit);
    setJournalHeading(entryToEdit.heading);
    setJournalEntry(entryToEdit.entry);
    setSelectedDate(entryToEdit.date);
  };

  const updateJournalEntry = () => {
    const updatedEntries = journalEntries.map((entry) =>
      entry.id === selectedEntry.id ? { ...entry, heading: journalHeading, entry: journalEntry, date: selectedDate } : entry
    );
    setJournalEntries(updatedEntries);
    setJournalEntry('');
    setJournalHeading('');
    setSelectedDate('');
    setSelectedEntry(null); // Clear selected entry after updating
  };

  return (
    <div className="mood-tracker-container">
      <h2>Journal Entry</h2>
      <div className="journal-input">
        <input
          type="text"
          placeholder="Enter heading..."
          value={journalHeading}
          onChange={(e) => setJournalHeading(e.target.value)}
        />
        <textarea
          placeholder="Write your journal entry..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        {selectedEntry ? (
          <button onClick={updateJournalEntry}>Update Entry</button>
        ) : (
          <button onClick={addJournalEntry}>Add Entry</button>
        )}
      </div>
      <ul className="journal-list">
        {journalEntries.map((entry) => (
          <li key={entry.id} className="journal-item" onClick={() => editJournalEntry(entry.id)}>
            <p>{entry.date}</p>
            <h3>{entry.heading}</h3>
            
            <button onClick={(e) => { e.stopPropagation(); deleteJournalEntry(entry.id); }} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
      <h2>Mood Tracker</h2>
      <div className="mood-buttons">
        <button onClick={() => addMood('😄')}>😄</button>
        <button onClick={() => addMood('😊')}>😊</button>
        <button onClick={() => addMood('😐')}>😐</button>
        <button onClick={() => addMood('😞')}>😞</button>
        <button onClick={() => addMood('😡')}>😡</button>
      </div>
      <ul className="mood-list">
        {moods.map((mood) => (
          <li key={mood.id} className="mood-item">
            {mood.date}: {mood.mood}
            <button onClick={() => deleteMood(mood.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <input
          type="date"
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div>
              {todo.date ? `${todo.date}: ` : ''}
              {todo.text}
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;
