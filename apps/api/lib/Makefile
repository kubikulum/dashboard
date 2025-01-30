.PHONY: all clean install download-spec generate-api

# Variables
OPENAPI_VERSION := 7.11.0
SPEC_URL ?= $(shell echo "Spec URL required. Usage: make download-spec SPEC_URL=your_url JWT_TOKEN=your_token" && exit 1)
API_PATH = $(shell echo $(SPEC_URL) | sed -n 's/.*openapi\/v3\/apis\/\(.*\)/\1/p')
SPEC_FILE := openapi/$(API_PATH).json
GENERATED_DIR := generated/$(API_PATH)
JWT_TOKEN ?= $(shell echo "JWT token required. Usage: make download-spec SPEC_URL=your_url JWT_TOKEN=your_token" && exit 1)

# Default target
all: install download-spec generate-api

# Install OpenAPI Generator
install:
	@echo "Installing OpenAPI Generator CLI..."
	npm install @openapitools/openapi-generator-cli@2.7.0
	npx openapi-generator-cli version-manager set $(OPENAPI_VERSION)

# Download OpenAPI specification
download-spec:
	@echo "Downloading OpenAPI specification from $(SPEC_URL)..."
	@mkdir -p $(dir $(SPEC_FILE))
	@curl -k -H "Authorization: Bearer $(JWT_TOKEN)" \
		$(SPEC_URL) \
		-o $(SPEC_FILE)

# Generate NestJS API client
generate-api:
	@echo "Generating NestJS API client..."
	@npx openapi-generator-cli generate \
		-i $(SPEC_FILE) \
		-g typescript-nestjs \
		-o $(GENERATED_DIR) \
		--additional-properties=npmName=@kukube/api-client\
supportsES6=true,\
npmVersion=1.0.0,\
modelPropertyNaming=camelCase,\
enumPropertyNaming=UPPERCASE,\
serviceFileSuffix=.service,\
apiFileSuffix=.api,\
useTags=true,\
stringEnums=true,\
snapshot=false,\
skipDefaultInterface=true,\
interfaceOnly=true

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	@rm -rf generated/*
	@rm -rf openapi/*

# Help target
help:
	@echo "Available targets:"
	@echo "  all            : Install dependencies, download spec, and generate API client"
	@echo "  install        : Install OpenAPI Generator CLI"
	@echo "  download-spec  : Download OpenAPI specification (requires SPEC_URL and JWT_TOKEN)"
	@echo "  generate-api   : Generate NestJS API client"
	@echo "  clean          : Remove generated files"
	@echo "  help           : Show this help message"
	@echo ""
	@echo "Usage:"
	@echo "  make all SPEC_URL=your_url JWT_TOKEN=your_token"
	@echo "  make download-spec SPEC_URL=your_url JWT_TOKEN=your_token"
	@echo ""
	@echo "Example:"
	@echo "  make all SPEC_URL=https://api.example.com/openapi/v3/apis/cluster.x-k8s.io/v1beta1 JWT_TOKEN=your_token"
