pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building branch: ${env.BRANCH_NAME}"
                    // // 根据分支做不同处理
                    // if (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master') {
                    //     sh 'mvn clean deploy'  // 生产分支发布
                    // } else if (env.BRANCH_NAME.startsWith('release/')) {
                    //     sh 'mvn clean package -Pstaging'
                    // } else if (env.BRANCH_NAME.startsWith('feature/')) {
                    //     sh 'mvn clean package -Pdev'
                    // }
                }
            }
        }
    }
}
