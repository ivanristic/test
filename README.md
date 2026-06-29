# Argo CD & Newman Testing Demo Workflow

This repository contains a blueprint architecture to demonstrate a full GitOps deployment loop using Argo CD followed by automated integration testing with Newman.

## Directory Structure
- `charts/demo-app/`: Helm chart managing the microservice deployment.
  - `app.js`: Inlined raw source code injected dynamically into the container via Helm file utility.
- `tests/`: Postman/Newman collection ensuring end-to-end routing integrity.
- `argo-app.yaml`: Root Argo CD application definition syncing this setup to your cluster.
