/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManageCollectionPageService } from './manage-collection.service';

@Component({
  selector: 'app-manage-collection',
  templateUrl: './manage-collection.component.html',
  styleUrls: ['./manage-collection.component.scss'],
})
export class ManageCollectionComponent implements OnInit, OnDestroy {
  constructor(private manageCollectionService: ManageCollectionPageService) {}

  ngOnInit(): void {
    this.manageCollectionService.initUrlBindingStreams();
  }

  ngOnDestroy(): void {
    this.manageCollectionService.clearSelectedModelId();
    this.manageCollectionService.clearSubjects();
  }
}
