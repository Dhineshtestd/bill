// Set current date and time on load
function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    
    const dateTimeString = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    document.getElementById('displayDate').textContent = dateTimeString;
}

// Calculate net quantity
function calculateNetQty() {
    const fullQty = parseFloat(document.getElementById('fullQty').value) || 0;
    const emptyQty = parseFloat(document.getElementById('emptyQty').value) || 0;
    const netQty = (fullQty - emptyQty).toFixed(2);
    document.getElementById('displayNetQty').textContent = netQty + ' MT';
}

// Update preview
function updatePreview() {
    document.getElementById('displayDcRef').textContent = document.getElementById('dcRef').value;
    document.getElementById('displayParty').textContent = document.getElementById('party').value;
    document.getElementById('displayLoading').textContent = document.getElementById('loading').value;
    document.getElementById('displayUnloading').textContent = document.getElementById('unloading').value;
    document.getElementById('displayTransport').textContent = document.getElementById('transport').value;
    document.getElementById('displayTruck').textContent = document.getElementById('truck').value;
    document.getElementById('displayItem').textContent = document.getElementById('item').value;
    document.getElementById('displayHsn').textContent = document.getElementById('hsn').value;
    document.getElementById('displayEmptyQty').textContent = document.getElementById('emptyQty').value + ' MT';
    document.getElementById('displayFullQty').textContent = document.getElementById('fullQty').value + ' MT';
    document.getElementById('displayPaymentMode').textContent = document.getElementById('paymentMode').value;
    
    calculateNetQty();
}

// Form submission
document.getElementById('challanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    updatePreview();
});

// Real-time updates
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Initialize
updateDateTime();
updatePreview();
setInterval(updateDateTime, 60000); // Update time every minute
