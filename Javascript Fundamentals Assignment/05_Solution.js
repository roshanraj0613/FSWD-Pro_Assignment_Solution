function estimateDelivery(packageType) {
    let deliveryTime;

    switch (packageType) {
        case 'standard':
            // fallthrough
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'next day';
            break;
        default:
            deliveryTime = 'Invalid package type';
    }

    console.log(`Estimated delivery time for ${packageType} package: ${deliveryTime}`);
}

estimateDelivery('standard'); // Estimated delivery time for standard package: 3-5 days
estimateDelivery('express'); // Estimated delivery time for express package: 1-2 days
estimateDelivery('overnight'); // Estimated delivery time for overnight package: next day
estimateDelivery('invalid'); // Estimated delivery time for invalid package: Invalid package type