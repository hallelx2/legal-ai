#!/bin/bash

# Create directories for the Next.js app
mkdir -p "app/(auth)/signin" "app/(auth)/signup" \
"app/(dashboard)/dashboard" "app/(dashboard)/agreements/new" \
"app/(dashboard)/agreements/[id]" "app/(dashboard)/history" \
"app/(dashboard)/contacts" "app/(dashboard)/settings"

# Create files only if they do not already exist
for file in \
  "app/(auth)/signin/page.tsx" \
  "app/(auth)/signup/page.tsx" \
  "app/(dashboard)/dashboard/page.tsx" \
  "app/(dashboard)/agreements/page.tsx" \
  "app/(dashboard)/agreements/new/page.tsx" \
  "app/(dashboard)/agreements/[id]/page.tsx" \
  "app/(dashboard)/history/page.tsx" \
  "app/(dashboard)/contacts/page.tsx" \
  "app/(dashboard)/settings/page.tsx" \
  "app/page.tsx" \
  "app/layout.tsx" \
  "app/(dashboard)/layout.tsx"; do
  if [ ! -f "$file" ]; then
    mkdir -p "$(dirname "$file")"  # Ensure directory exists
    echo "// $file" > "$file"
    echo "Created $file"
  else
    echo "$file already exists"
  fi
done
