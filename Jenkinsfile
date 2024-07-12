pipeline {
    agent any

    environment {
        NODE_VERSION = '22.4.1' // Specify the Node.js version you want to use
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                checkout scm
            }
        }

        stage('Install Node.js') {
            steps {
                // Install Node.js
                sh '''
                curl -sL https://deb.nodesource.com/setup_$NODE_VERSION -o nodesource_setup.sh
                sudo bash nodesource_setup.sh
                sudo apt-get install -y nodejs
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test --project -chromium'
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
        success {
            // Notify success (customize this part as needed)
            echo 'Playwright tests ran successfully!'
        }
        failure {
            // Notify failure (customize this part as needed)
            echo 'Playwright tests failed.'
        }
    }
}
