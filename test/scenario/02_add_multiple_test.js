
Feature('add_task');

Scenario('adding multi tasks', (I) => {
  I.amOnPage('http://localhost:2015');
 
  var tasks = ['Do home work', 'Have lunch', 'Go to sleep', 'Clean the house', 'Go to grocessry',
  'Take dog for walk', 'Call mom', 'Prepare dinner'];
  for (i in tasks) {
    I.fillField('.new-todo', tasks[i]);
    I.pressKey('Enter');
  }
  I.seeNumberOfElements('ul.todo-list li', tasks.length);
  I.seeElement("input.toggle-all");
  I.click("label[for=toggle-all]");
  I.see("0 items left");
  I.click("button.clear-completed");
  I.dontSeeElement('section.main');
  I.dontSeeElement('footer.footer');
});
