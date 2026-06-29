pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
              echo 'checkout'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building branch: ${env.BRANCH_NAME}"
                    // 根据分支做不同处理
                        echo env.BRANCH_NAM 'deploy======'
                    // if (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master') {
                    //     // sh 'mvn clean deploy'  // 生产分支发布
                    //     echo env.BRANCH_NAM 'deploy======'
                    // } else if (env.BRANCH_NAME == ) {
                    //     sh 'mvn clean package -Pstaging'
                    // } else if (env.BRANCH_NAME.startsWith('feature/')) {
                    //     sh 'mvn clean package -Pdev'
                    // }
                }
            }
        }
    }
}
