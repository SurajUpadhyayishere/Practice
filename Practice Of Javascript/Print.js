// // 1. Select element by ID
// const output = document.getElementById("output");

// // 2. Change inner text
// output.innerText = "Updated Output using innerText";

// // 3. Change inner HTML
// output.innerHTML = "<strong>Now bold!</strong>";

// // 4. Add a class to an element
// output.classList.add("highlight");

// // 5. Remove a class
// output.classList.remove("highlight");

// // 6. Toggle a class
// output.classList.toggle("box");

// // 7. Change CSS style directly
// output.style.backgroundColor = "lightyellow";

// // 8. Add event listener to a button
// document.getElementById("btnAction").addEventListener("click", () => {
//   alert("Button Clicked!");
// });

// // 9. Get value from input field
// document.getElementById("btnAction").addEventListener("click", () => {
//   let value = document.getElementById("inputBox").value;
//   console.log("Input value:", value);
// });

// // 10. Create a new element
// const newPara = document.createElement("p");
// newPara.innerText = "This is a new paragraph.";
// document.body.appendChild(newPara);

// // 11. Append an element to a list
// const newItem = document.createElement("li");
// newItem.innerText = "Learn DOM";
// document.getElementById("itemList").appendChild(newItem);

// // 12. Remove an element
// document.getElementById("itemList").lastElementChild.remove();

// // 13. Clone an element
// const clonedOutput = output.cloneNode(true);
// document.body.appendChild(clonedOutput);

// // 14. Set attribute
// output.setAttribute("data-name", "outputBox");

// // 15. Get attribute
// console.log(output.getAttribute("data-name"));

// // 16. Add multiple list items using a loop
// for (let i = 1; i <= 3; i++) {
//   let li = document.createElement("li");
//   li.innerText = `Task ${i}`;
//   document.getElementById("itemList").appendChild(li);
// }

// // 17. Use querySelector
// const firstLi = document.querySelector("#itemList li");
// firstLi.style.color = "blue";

// // 18. Use querySelectorAll and loop
// document.querySelectorAll("#itemList li").forEach((li, index) => {
//   li.innerText += ` (Item ${index + 1})`;
// });

// // 19. BOM - Alert, Confirm, Prompt
// document.getElementById("btnAction").addEventListener("dblclick", () => {
//   let name = prompt("Enter your name:");
//   if (name) alert(`Hello, ${name}`);
// });

// // 20. BOM - Window Size
// console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`);

// // 21. BOM - Scroll position
// window.addEventListener("scroll", () => {
//   console.log("Scroll Y:", window.scrollY);
// });

// // 22. BOM - Open new tab
// // window.open("https://example.com", "_blank"); // Uncomment to test

// // 23. BOM - Navigator info
// console.log("Browser info:", navigator.userAgent);

// // 24. BOM - Location object
// console.log("Current URL:", window.location.href);

// // 25. BOM - Redirect to another page
// // window.location.href = "https://google.com"; // Uncomment to test

// // 26. BOM - Set timeout
// setTimeout(() => {
//   console.log("3 seconds passed");
// }, 3000);

// // 27. BOM - Set interval and clear it
// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
//   if (count >= 5) clearInterval(intervalId);
// }, 1000);

// // 28. Create and add button dynamically
// let dynamicBtn = document.createElement("button");
// dynamicBtn.innerText = "Dynamic Button";
// document.body.appendChild(dynamicBtn);

// // 29. Handle dynamic button click
// dynamicBtn.addEventListener("click", () => {
//   alert("You clicked the dynamic button!");
// });

// // 30. DOM Traversal (parent, children)
// console.log("Parent of output:", output.parentElement);
// console.log("Children of list:", document.getElementById("itemList").children);
