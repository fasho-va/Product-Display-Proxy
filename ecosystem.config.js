module.exports = {
  apps: [
    {
      name: "fashova",
      script: "./server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-222-172-209.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/Product-Display.pem",
      ref: "origin/master",
      repo: "git@github.com:fasho-va/Product-Display-Proxy.git",
      path: "/home/ubuntu/Fashova-Proxy",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
