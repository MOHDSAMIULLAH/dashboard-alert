export const processAlertData = (data) => {
  const totalAlerts = data.length;
  const srcIpCount = {};
  const destPortCount = {};
  const categoryCount = {};

  data.forEach(alert => {
    const srcIp = alert.src_ip;
    const destPort = alert.dest_port;
    const category = alert?.alert?.category;

    if (srcIpCount[srcIp]) {
      srcIpCount[srcIp]++;
    } else {
      srcIpCount[srcIp] = 1;
    }

    if (destPortCount[destPort]) {
      destPortCount[destPort]++;
    } else {
      destPortCount[destPort] = 1;
    }

    if (category) { // Ensure category is not undefined
      if (categoryCount[category]) {
        categoryCount[category]++;
      } else {
        categoryCount[category] = 1;
      }
    }

  });

  const mostFrequentSrcIp = Object.keys(srcIpCount).reduce((a, b) => srcIpCount[a] > srcIpCount[b] ? a : b);
  const mostFrequentSrcIpPercentage = ((srcIpCount[mostFrequentSrcIp] / totalAlerts) * 100).toFixed(2);

  const mostTargetedPort = Object.keys(destPortCount).reduce((a, b) => destPortCount[a] > destPortCount[b] ? a : b);
  const mostTargetedPortPercentage = ((destPortCount[mostTargetedPort] / totalAlerts) * 100).toFixed(2);

  let mostFrequentCategory = '';
  let mostFrequentCategoryPercentage = 0;

  if (Object.keys(categoryCount).length > 0) {
    mostFrequentCategory = Object.keys(categoryCount).reduce((a, b) => categoryCount[a] > categoryCount[b] ? a : b);
    mostFrequentCategoryPercentage = ((categoryCount[mostFrequentCategory] / totalAlerts) * 100).toFixed(2);
  }
    const summary = {
      totalAlerts: data.length,
      mostFrequentSrcIp: getMostFrequent(data.map(alert => alert.src_ip)),
      mostTargetedPort: getMostFrequent(data.map(alert => alert.dest_port)),
      mostFrequentSrcIpPercentage,
      mostTargetedPortPercentage,
      mostFrequentCategory,
      mostFrequentCategoryPercentage
    };

  
    const alertsOverTime = getAlertsOverTime(data);
    const severityDistribution = getSeverityDistribution(data);
    const categoryDistribution = getCategoryDistribution(data);
  
    return { summary, alertsOverTime, severityDistribution, categoryDistribution };
  };
  
  const getMostFrequent = (array) => {
    const frequency = {};
    array.forEach(value => { frequency[value] = (frequency[value] || 0) + 1; });
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
  };
  
  const getAlertsOverTime = (data) => {
    const alertsByTimestamp = {};
    data.forEach(alert => {
      const timestamp = new Date(alert.timestamp).toLocaleString();
      alertsByTimestamp[timestamp] = (alertsByTimestamp[timestamp] || 0) + 1;
    });
    return Object.keys(alertsByTimestamp).map(key => ({ timestamp: key, alerts: alertsByTimestamp[key] }));
  };
  
  const getSeverityDistribution = (data) => {
    const severityCount = [0, 0, 0, 0, 0];
    data.forEach(alert => {
      severityCount[((alert?.alert?.severity - 1) || 0)]++;
    });
    return severityCount.map((count, index) => ({ name: `Severity ${index + 1}`, value: count }));
  };
  
  const getCategoryDistribution = (data) => {
    const categoryCount = {};
    data.forEach(alert => {
      const category = alert?.alert?.category;
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });
    return Object.keys(categoryCount).map(key => ({ name: key, value: categoryCount[key] }));
  };
  