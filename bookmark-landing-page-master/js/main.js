// Nav


// Tab Features

let tabItems = document.querySelectorAll('.tab-item');
let tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item

function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');

    // Grab content item from DOM
    let tabContentItem = document.querySelector(` #${this.id}-content `);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click

tabItems.forEach(item => item.addEventListener('click', selectItem))


// Accordion

let items = document.querySelectorAll(".faq__questions--accordion-item a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


